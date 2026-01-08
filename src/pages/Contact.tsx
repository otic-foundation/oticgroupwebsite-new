import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Zoho CRM form scripts
    const script = document.createElement('script');
    script.innerHTML = `
      function privacyAlert7179876000000615004(){
        var privacyTool = document.getElementById('privacyTool7179876000000615004');
        var privacyErr = document.getElementById('privacyErr7179876000000615004');
        if( privacyTool != undefined && !privacyTool.checked ){
          privacyErr.style.visibility = 'visible';
          privacyTool.ariaInvalid = 'true';
          privacyTool.focus();
          return false;
        }
        return true;
      }
      function disableErr7179876000000615004(){
        var privacyTool = document.getElementById('privacyTool7179876000000615004');
        var privacyErr = document.getElementById('privacyErr7179876000000615004');
        if( privacyTool != undefined && privacyTool.checked && privacyErr != undefined ){
          privacyErr.style.visibility = 'hidden';
          privacyTool.ariaInvalid = 'false';
        }
      }
      function validateEmail7179876000000615004(){
        var form = document.forms[ 'WebToLeads7179876000000615004' ];
        var emailFld = form.querySelectorAll('[ftype=email]');
        var i;
        for( i = 0; i < emailFld.length; i++ ){
          var emailVal = emailFld[ i ].value;
          if((emailVal.replace( /^\\s+|\\s+$/g,'' )).length != 0 ){
            var atpos = emailVal.indexOf('@');
            var dotpos = emailVal.lastIndexOf('.');
            if( atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length ){
              alert('Please enter a valid email address. ');
              emailFld[ i ].focus();
              return false;
            }
          }
        }
        return true;
      }
      function checkMandatory7179876000000615004(){
        var mndFileds = new Array('Company', 'First Name', 'Last Name', 'Designation', 'Email', 'Phone', 'Website', 'Annual Revenue', 'City', 'Country', 'Description');
        var fldLangVal = new Array('Company', 'First Name', 'Last Name', 'Job Title', 'Work Email', 'Phone', 'Industry/ Sector', 'Are you representing your organisation?', 'City', 'Country', 'Goal/ Challenge');
        for( var i = 0; i < mndFileds.length; i++ ){
          var fieldObj = document.forms[ 'WebToLeads7179876000000615004' ][ mndFileds[ i ]];
          if( fieldObj ){
            if(((fieldObj.value ).replace( /^\\s+|\\s+$/g,'' )).length == 0 ){
              if( fieldObj.type == 'file' ){
                alert('Please select a file to upload.');
                fieldObj.focus();
                return false;
              }
              alert(fldLangVal[ i ] + ' cannot be empty.');
              fieldObj.focus();
              return false;
            } else if( fieldObj.nodeName == 'SELECT' ){
              if( fieldObj.options[fieldObj.selectedIndex].value == '-None-' ){
                alert(fldLangVal[ i ] + ' cannot be none.');
                fieldObj.focus();
                return false;
              }
            } else if( fieldObj.type == 'checkbox' ){
              if( fieldObj.checked == false ){
                alert('Please accept ' + fldLangVal[ i ]);
                fieldObj.focus();
                return false;
              }
            }
            try{
              if( fieldObj.name == 'Last Name' ){
                name = fieldObj.value;
              }
            } catch(e){}
          }
        }
        if( !validateEmail7179876000000615004()){ return false; }
        if( !privacyAlert7179876000000615004()){ return false; }
        var urlparams = new URLSearchParams(window.location.search);
        if( urlparams.has( 'service' ) && ( urlparams.get( 'service' ) === 'smarturl' )){
          var webform = document.getElementById('webform7179876000000615004');
          var service = urlparams.get('service');
          var smarturlfield = document.createElement('input');
          smarturlfield.setAttribute('type', 'hidden');
          smarturlfield.setAttribute('value', service);
          smarturlfield.setAttribute('name', 'service');
          webform.appendChild(smarturlfield);
        }
        document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
      }
      function tooltipShow7179876000000615004(el){
        var tooltip = el.nextElementSibling;
        var tooltipDisplay = tooltip.style.display;
        if( tooltipDisplay == 'none' ){
          var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
          for( var i = 0; i < allTooltip.length; i++ ){
            allTooltip[ i ].style.display = 'none';
          }
          tooltip.style.display = 'block';
        } else{
          tooltip.style.display = 'none';
        }
      }
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-accent font-body mb-4">
                Get in Touch
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                Contact Us
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                Ready to transform your organization with AI? Let's start a conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6 text-white">Get in Touch</h2>
                  <p className="text-muted-foreground font-body">
                    Have a question or want to work together? Reach out to us.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/20 flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-medium mb-1">Email</p>
                      <a 
                        href="mailto:info@oticgroup.net" 
                        className="text-muted-foreground font-body hover:text-accent transition-colors"
                      >
                        info@oticgroup.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/20 flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-medium mb-1">Phone</p>
                      <a 
                        href="tel:+256780176805" 
                        className="text-muted-foreground font-body hover:text-accent transition-colors"
                      >
                        +256 780 176 805
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/20 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-medium mb-1">Locations</p>
                      <p className="text-muted-foreground font-body">
                        Uganda • Rwanda
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zoho CRM Form */}
              <div className="lg:col-span-2" ref={formRef}>
                <div className="p-8 bg-secondary/30 border border-border rounded-xl">
                  <style dangerouslySetInnerHTML={{__html: `
                    .zcwf_lblLeft .zcwf_title{ 
                      word-wrap: break-word; 
                      padding: 0px 6px 10px; 
                      font-weight: bold;
                      font-size: 1.5rem;
                      color: white;
                      font-family: var(--font-display);
                    }
                    .zcwf_lblLeft .zcwf_col_fld input[type=text], 
                    .zcwf_lblLeft .zcwf_col_fld textarea { 
                      width: 100%; 
                      border: 1px solid hsl(var(--border)) !important; 
                      resize: vertical; 
                      border-radius: 0.5rem; 
                      float: left;
                      background: hsl(var(--background));
                      color: hsl(var(--foreground));
                      padding: 0.75rem 1rem;
                      font-family: var(--font-body);
                    }
                    .zcwf_lblLeft .zcwf_col_fld input[type=text]:focus,
                    .zcwf_lblLeft .zcwf_col_fld textarea:focus {
                      outline: none;
                      border-color: hsl(var(--accent)) !important;
                    }
                    .zcwf_lblLeft .zcwf_col_lab { 
                      width: 100%; 
                      word-break: break-word; 
                      padding: 0px 6px 8px; 
                      margin-top: 5px; 
                      float: left; 
                      min-height: 1px;
                      color: hsl(var(--foreground));
                      font-family: var(--font-body);
                      font-size: 0.875rem;
                    }
                    .zcwf_lblLeft .zcwf_col_fld { 
                      float: left; 
                      width: 100%; 
                      padding: 0px 6px 0px; 
                      position: relative; 
                      margin-top: 5px; 
                    }
                    .zcwf_lblLeft .zcwf_row { 
                      margin: 15px 0px; 
                    }
                    .zcwf_lblLeft .formsubmit { 
                      cursor: pointer; 
                      font-size: 14px;
                      background: linear-gradient(135deg, hsl(var(--cta)) 0%, hsl(var(--accent)) 100%);
                      color: hsl(var(--cta-foreground));
                      padding: 0.75rem 2rem;
                      border-radius: 0.5rem;
                      border: none;
                      font-weight: 500;
                      text-transform: uppercase;
                      letter-spacing: 0.05em;
                      transition: all 0.3s;
                    }
                    .zcwf_lblLeft .formsubmit:hover {
                      opacity: 0.9;
                      transform: translateY(-1px);
                    }
                    .zcwf_lblLeft .zcwf_button { 
                      font-size: 14px; 
                      border: 1px solid hsl(var(--border)); 
                      padding: 0.75rem 2rem; 
                      border-radius: 0.5rem; 
                      cursor: pointer;
                      background: transparent;
                      color: hsl(var(--foreground));
                      margin-left: 0.5rem;
                    }
                    .zcwf_lblLeft .zcwf_privacy_txt { 
                      color: hsl(var(--muted-foreground)); 
                      font-size: 14px; 
                      font-family: var(--font-body); 
                      display: inline-block; 
                      vertical-align: top; 
                      padding-top: 2px; 
                      margin-left: 6px; 
                    }
                    .zcwf_lblLeft .zcwf_col_help span { 
                      cursor: pointer; 
                      width: 16px; 
                      height: 16px; 
                      display: inline-block; 
                      background: hsl(var(--secondary)); 
                      border: 1px solid hsl(var(--border)); 
                      color: hsl(var(--muted-foreground)); 
                      text-align: center; 
                      font-size: 11px; 
                      line-height: 16px; 
                      font-weight: bold; 
                      border-radius: 50%; 
                    }
                    .zcwf_lblLeft .zcwf_tooltip_ctn { 
                      position: absolute; 
                      background: hsl(var(--secondary)); 
                      padding: 3px 6px; 
                      top: 3px; 
                      border-radius: 4px; 
                      word-break: break-word; 
                      min-width: 100px; 
                      max-width: 150px; 
                      color: hsl(var(--foreground)); 
                      z-index: 100; 
                    }
                    .zcwf_lblLeft .zcwf_privacy input[type=checkbox] {
                      accent-color: hsl(var(--accent));
                    }
                    @media all and (max-width: 600px) { 
                      .zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld { 
                        width: auto; 
                        float: none !important; 
                      } 
                    }
                  `}} />
                  
                  <form 
                    id="webform7179876000000615004" 
                    action="https://crm.zoho.com/crm/WebToLeadForm" 
                    name="WebToLeads7179876000000615004" 
                    method="POST" 
                    onSubmit={(e) => {
                      (document as any).charset = "UTF-8";
                      return (window as any).checkMandatory7179876000000615004 ? (window as any).checkMandatory7179876000000615004() : true;
                    }}
                    acceptCharset="UTF-8"
                    className="zcwf_lblLeft"
                  >
                    <input type="text" style={{display: 'none'}} name="xnQsjsdp" defaultValue="de7d1694e13dae298580dfcb6d63253a7bbdcc7663608f06f31da36f8b4aa232" />
                    <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                    <input type="text" style={{display: 'none'}} name="xmIwtLD" defaultValue="3b577bed20f33cc8ce4acd7ed9d777883c2d06176864ea7ceced9056b9f8b385020fe6000b276c92c7550f1c78e18f36" />
                    <input type="text" style={{display: 'none'}} name="actionType" defaultValue="TGVhZHM=" />
                    <input type="text" style={{display: 'none'}} name="returnURL" defaultValue="null" />
                    
                    <div className="zcwf_title">Get in touch!</div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="zcwf_row">
                        <div className="zcwf_col_lab"><label htmlFor="First_Name">First Name <span style={{color: 'hsl(var(--cta))'}}>*</span></label></div>
                        <div className="zcwf_col_fld"><input type="text" id="First_Name" name="First Name" maxLength={40} /></div>
                      </div>
                      <div className="zcwf_row">
                        <div className="zcwf_col_lab"><label htmlFor="Last_Name">Last Name <span style={{color: 'hsl(var(--cta))'}}>*</span></label></div>
                        <div className="zcwf_col_fld"><input type="text" id="Last_Name" name="Last Name" maxLength={80} /></div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="zcwf_row">
                        <div className="zcwf_col_lab"><label htmlFor="Company">Company <span style={{color: 'hsl(var(--cta))'}}>*</span></label></div>
                        <div className="zcwf_col_fld"><input type="text" id="Company" name="Company" maxLength={200} /></div>
                      </div>
                      <div className="zcwf_row">
                        <div className="zcwf_col_lab"><label htmlFor="Designation">Job Title <span style={{color: 'hsl(var(--cta))'}}>*</span></label></div>
                        <div className="zcwf_col_fld"><input type="text" id="Designation" name="Designation" maxLength={100} /></div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="zcwf_row">
                        <div className="zcwf_col_lab"><label htmlFor="Email">Work Email <span style={{color: 'hsl(var(--cta))'}}>*</span></label></div>
                        <div className="zcwf_col_fld">
                          <input type="text" id="Email" name="Email" maxLength={100} />
                        </div>
                      </div>
                      <div className="zcwf_row">
                        <div className="zcwf_col_lab"><label htmlFor="Phone">Phone <span style={{color: 'hsl(var(--cta))'}}>*</span></label></div>
                        <div className="zcwf_col_fld"><input type="text" id="Phone" name="Phone" maxLength={30} /></div>
                      </div>
                    </div>
                    
                    <div className="zcwf_row">
                      <div className="zcwf_col_lab"><label htmlFor="Website">Industry / Sector <span style={{color: 'hsl(var(--cta))'}}>*</span></label></div>
                      <div className="zcwf_col_fld"><input type="text" id="Website" name="Website" maxLength={255} placeholder="e.g. Banking & Financial Services, Government, Manufacturing..." /></div>
                    </div>
                    
                    <div className="zcwf_row">
                      <div className="zcwf_col_lab"><label htmlFor="Description">Goal / Challenge <span style={{color: 'hsl(var(--cta))'}}>*</span></label></div>
                      <div className="zcwf_col_fld"><textarea id="Description" name="Description" rows={4} /></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="zcwf_row">
                        <div className="zcwf_col_lab"><label htmlFor="City">City <span style={{color: 'hsl(var(--cta))'}}>*</span></label></div>
                        <div className="zcwf_col_fld"><input type="text" id="City" name="City" maxLength={100} /></div>
                      </div>
                      <div className="zcwf_row">
                        <div className="zcwf_col_lab"><label htmlFor="Country">Country <span style={{color: 'hsl(var(--cta))'}}>*</span></label></div>
                        <div className="zcwf_col_fld"><input type="text" id="Country" name="Country" maxLength={100} /></div>
                      </div>
                    </div>
                    
                    <div className="zcwf_row">
                      <div className="zcwf_col_lab"><label htmlFor="Annual_Revenue">Are you representing your organisation? <span style={{color: 'hsl(var(--cta))'}}>*</span></label></div>
                      <div className="zcwf_col_fld"><input type="text" id="Annual_Revenue" name="Annual Revenue" maxLength={16} placeholder="Yes / No" /></div>
                    </div>
                    
                    <div className="zcwf_row">
                      <div className="zcwf_privacy flex items-start gap-3">
                        <input 
                          autoComplete="off" 
                          id="privacyTool7179876000000615004" 
                          type="checkbox" 
                          name="" 
                          onClick={() => (window as any).disableErr7179876000000615004 && (window as any).disableErr7179876000000615004()}
                          className="mt-1"
                        />
                        <div className="zcwf_privacy_txt">
                          I agree to be contacted for consultation calls and product presentations.
                        </div>
                      </div>
                      <div id="privacyErr7179876000000615004" style={{fontSize: '12px', color: 'hsl(var(--cta))', paddingLeft: '5px', visibility: 'hidden'}}>Please accept this</div>
                    </div>
                    
                    <input type="text" style={{display: 'none'}} name="aG9uZXlwb3Q" defaultValue="" />
                    
                    <div className="zcwf_row flex gap-4 mt-8">
                      <input type="submit" id="formsubmit" className="formsubmit zcwf_button" value="Submit" title="Submit" />
                      <input type="reset" className="zcwf_button" name="reset" value="Reset" title="Reset" />
                    </div>
                  </form>
                  
                  <script 
                    id="wf_anal" 
                    src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=03d3735423f2b151f23ed2ac6a7253235babf24913dadeca9b7eaa6252618aac2b2a62cb7e767063b75148c1a6244d96gida28483d659e6feff155b27fe6421e22c0b07066c0c0f3e3edb9a8bd510c4249egid8b6169edfbebb2a4ed40dc40da2db8e42ad73b102238c10e4813efe8f99ca5fagidde626a3e3647f6b6578aef635f618dc62a25da6fa94ce910c548fe7637eee3f6&tw=5e5e937e3554404b21799d3e3db5d8abd09346326eb446d4829dae06479236b5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
