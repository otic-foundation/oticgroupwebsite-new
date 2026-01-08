import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const COMPANY_CONTEXT = `You are the Otic Group AI assistant. Otic Group is a leading AI solutions company focused on African enterprise transformation based in Uganda and Rwanda.

Key information:
- Products: Otic Vision (AI-powered business platform), Otic Learn (AI-driven learning platform)
- Services: Enterprise AI Integration, Workforce Training, Research & Development, Digital Process Automation, AI Talent Outsourcing
- Industries: Banking & Financial Services, Healthcare, Agriculture, Manufacturing, Government
- Contact: info@oticgroup.net, +256 780 176 805
- Locations: Uganda & Rwanda

Always be helpful, professional, and direct users to the Contact page for sales inquiries. Keep responses concise.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, history } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    const messages = [
      { role: "system", content: COMPANY_CONTEXT },
      ...history.slice(-10),
      { role: "user", content: message }
    ];

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that. Please contact us at info@oticgroup.net.";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Chat error:', error);
    return new Response(JSON.stringify({ reply: "I'm having trouble right now. Please contact us at info@oticgroup.net." }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
