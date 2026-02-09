import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Handshake } from 'lucide-react';

const Partners = () => {
  useEffect(() => {
    // Load Zoho CRM form scripts
    const script = document.createElement('script');
    script.innerHTML = `
      function validateEmail7179876000000629012(){
        var form = document.forms['WebToContacts7179876000000629012'];
        var emailFld = form.querySelectorAll('[ftype=email]');
        var i;
        for(i = 0; i < emailFld.length; i++){
          var emailVal = emailFld[i].value;
          if((emailVal.replace(/^\\s+|\\s+$/g,'')).length != 0){
            var atpos = emailVal.indexOf('@');
            var dotpos = emailVal.lastIndexOf('.');
            if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length){
              alert('Please enter a valid email address. ');
              emailFld[i].focus();
              return false;
            }
          }
        }
        return true;
      }
      function checkMandatory7179876000000629012(){
        var mndFileds = new Array('First Name','Last Name','Account Name','Email','Title','Phone','Description');
        var fldLangVal = new Array('First Name','Last Name','Company','Email','Title','Phone','Description');
        for(var i = 0; i < mndFileds.length; i++){
          var fieldObj = document.forms['WebToContacts7179876000000629012'][mndFileds[i]];
          if(fieldObj){
            if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'')).length == 0){
              if(fieldObj.type == 'file'){
                alert('Please select a file to upload.');
                fieldObj.focus();
                return false;
              }
              alert(fldLangVal[i] + ' cannot be empty.');
              fieldObj.focus();
              return false;
            } else if(fieldObj.nodeName == 'SELECT'){
              if(fieldObj.options[fieldObj.selectedIndex].value == '-None-'){
                alert(fldLangVal[i] + ' cannot be none.');
                fieldObj.focus();
                return false;
              }
            } else if(fieldObj.type == 'checkbox'){
              if(fieldObj.checked == false){
                alert('Please accept ' + fldLangVal[i]);
                fieldObj.focus();
                return false;
              }
            }
            try{
              if(fieldObj.name == 'Last Name'){
                name = fieldObj.value;
              }
            } catch(e){}
          }
        }
        if(!validateEmail7179876000000629012()){ return false; }
        var urlparams = new URLSearchParams(window.location.search);
        if(urlparams.has('service') && (urlparams.get('service') === 'smarturl')){
          var webform = document.getElementById('webform7179876000000629012');
          var service = urlparams.get('service');
          var smarturlfield = document.createElement('input');
          smarturlfield.setAttribute('type','hidden');
          smarturlfield.setAttribute('value', service);
          smarturlfield.setAttribute('name','service');
          webform.appendChild(smarturlfield);
        }
        document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
      }
      function tooltipShow7179876000000629012(el){
        var tooltip = el.nextElementSibling;
        var tooltipDisplay = tooltip.style.display;
        if(tooltipDisplay == 'none'){
          var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
          for(var i = 0; i < allTooltip.length; i++){
            allTooltip[i].style.display = 'none';
          }
          tooltip.style.display = 'block';
        } else {
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
        <section className="pt-32 pb-20 relative overflow-hidden bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-cta" />
                <p className="text-xs uppercase tracking-widest text-cta font-body">
                  Company
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                Partner with us
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                We collaborate with leading institutions, government bodies, and industry players 
                to accelerate Africa's AI transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-[840px] mx-auto">
              <div className="text-center mb-12">
                <Handshake className="w-16 h-16 text-[#1a365d] mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#1a365d]">
                  Become a Partner
                </h2>
                <p className="text-gray-600 font-body text-lg">
                  Interested in partnering with Otic Group? Fill out the form below and our 
                  partnership team will get in touch.
                </p>
              </div>

              <style dangerouslySetInnerHTML={{__html: `
                .partner-form label {
                  display: block;
                  font-size: 0.875rem;
                  font-family: var(--font-body);
                  font-weight: 500;
                  color: #1a365d;
                  margin-bottom: 0.5rem;
                }
                .partner-form input[type=text],
                .partner-form input[type=email],
                .partner-form textarea {
                  width: 100%;
                  padding: 0.75rem 1rem;
                  border: 1px solid rgba(26,54,93,0.2);
                  background: #f5f0e8;
                  color: #1a365d;
                  font-family: var(--font-body);
                  font-size: 16px;
                  border-radius: 0.5rem;
                  box-sizing: border-box;
                  transition: border-color 0.2s;
                }
                .partner-form input[type=text]:focus,
                .partner-form input[type=email]:focus,
                .partner-form textarea:focus {
                  outline: none;
                  border-color: #1a365d;
                }
                .partner-form textarea {
                  resize: vertical;
                  min-height: 120px;
                }
                .partner-form .zcwf_tooltip_ctn {
                  position: absolute;
                  background: #f5f0e8;
                  padding: 6px 10px;
                  border-radius: 4px;
                  font-size: 12px;
                  color: #1a365d;
                  border: 1px solid rgba(26,54,93,0.2);
                  z-index: 100;
                  min-width: 100px;
                  max-width: 200px;
                }
                .partner-form .zcwf_col_help span {
                  cursor: pointer;
                  width: 16px;
                  height: 16px;
                  display: inline-block;
                  background: rgba(26,54,93,0.1);
                  border: 1px solid rgba(26,54,93,0.2);
                  color: #1a365d;
                  text-align: center;
                  font-size: 11px;
                  line-height: 16px;
                  font-weight: bold;
                  border-radius: 50%;
                  margin-left: 4px;
                  vertical-align: middle;
                }
                .partner-form .form-field {
                  margin-bottom: 1.25rem;
                }
                .partner-form .form-two-col {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 1rem;
                }
                @media (max-width: 640px) {
                  .partner-form .form-two-col {
                    grid-template-columns: 1fr;
                  }
                }
                .partner-form .form-section-label {
                  font-size: 0.7rem;
                  text-transform: uppercase;
                  letter-spacing: 0.1em;
                  color: rgba(26,54,93,0.5);
                  font-family: var(--font-body);
                  margin-bottom: 0.75rem;
                  margin-top: 0.5rem;
                }
                .partner-form .form-divider {
                  border-top: 1px solid rgba(26,54,93,0.1);
                  margin: 1.5rem 0;
                }
                .partner-form .formsubmit {
                  cursor: pointer;
                  background: #1a365d;
                  color: white;
                  padding: 0.875rem 2.5rem;
                  border-radius: 0.5rem;
                  border: none;
                  font-weight: 600;
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 0.05em;
                  font-family: var(--font-body);
                  transition: all 0.3s;
                  width: 100%;
                }
                @media (min-width: 640px) {
                  .partner-form .formsubmit { width: auto; }
                }
                .partner-form .formsubmit:hover {
                  opacity: 0.9;
                  transform: translateY(-1px);
                }
                .partner-form .form-reset-btn {
                  cursor: pointer;
                  background: transparent;
                  color: rgba(26,54,93,0.5);
                  padding: 0.75rem 2rem;
                  border-radius: 0.5rem;
                  border: 1px solid rgba(26,54,93,0.15);
                  font-size: 13px;
                  font-family: var(--font-body);
                  width: 100%;
                }
                @media (min-width: 640px) {
                  .partner-form .form-reset-btn { width: auto; }
                }
              `}} />

              <form
                id="webform7179876000000629012"
                action="https://crm.zoho.com/crm/WebToContactForm"
                name="WebToContacts7179876000000629012"
                method="POST"
                onSubmit={(e) => {
                  (document as any).charset = "UTF-8";
                  return (window as any).checkMandatory7179876000000629012 ? (window as any).checkMandatory7179876000000629012() : true;
                }}
                acceptCharset="UTF-8"
                className="partner-form crmWebToEntityForm"
              >
                {/* Zoho hidden fields */}
                <input type="text" style={{display: 'none'}} name="xnQsjsdp" defaultValue="de7d1694e13dae298580dfcb6d63253a7bbdcc7663608f06f31da36f8b4aa232" />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" style={{display: 'none'}} name="xmIwtLD" defaultValue="3b577bed20f33cc8ce4acd7ed9d777883c2d06176864ea7ceced9056b9f8b385020fe6000b276c92c7550f1c78e18f36" />
                <input type="text" style={{display: 'none'}} name="actionType" defaultValue="Q29udGFjdHM=" />
                <input type="text" style={{display: 'none'}} name="returnURL" defaultValue="null" />

                {/* Section: Company Information */}
                <div className="form-section-label">Company Information</div>
                
                <div className="form-field">
                  <label htmlFor="Account_Name">Company <span style={{color: '#e53e3e'}}>*</span></label>
                  <div style={{position: 'relative'}}>
                    <input type="text" id="Account_Name" name="Account Name" maxLength={200} placeholder="Your organization" />
                  </div>
                </div>

                <div className="form-divider" />

                {/* Section: Personal Details */}
                <div className="form-section-label">Personal Details</div>

                <div className="form-two-col">
                  <div className="form-field">
                    <label htmlFor="First_Name_p">First Name <span style={{color: '#e53e3e'}}>*</span></label>
                    <input type="text" id="First_Name_p" name="First Name" maxLength={40} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="Last_Name_p">Last Name <span style={{color: '#e53e3e'}}>*</span></label>
                    <input type="text" id="Last_Name_p" name="Last Name" maxLength={80} />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="Title_p">Title <span style={{color: '#e53e3e'}}>*</span></label>
                  <input type="text" id="Title_p" name="Title" maxLength={100} />
                </div>

                <div className="form-divider" />

                {/* Section: Contact Details */}
                <div className="form-section-label">Contact Details</div>

                <div className="form-field">
                  <label htmlFor="Phone_p">Phone <span style={{color: '#e53e3e'}}>*</span></label>
                  <input type="text" id="Phone_p" name="Phone" maxLength={30} />
                </div>

                <div className="form-field">
                  <label htmlFor="Email_p">Email <span style={{color: '#e53e3e'}}>*</span></label>
                  <div style={{position: 'relative'}}>
                    <input type="text" autoComplete="off" id="Email_p" name="Email" maxLength={100} placeholder="you@company.com" data-ftype="email" />
                  </div>
                </div>

                <div className="form-divider" />

                {/* Section: Partnership Description */}
                <div className="form-section-label">Partnership Description</div>

                <div className="form-field">
                  <label htmlFor="Description_p">Description <span style={{color: '#e53e3e'}}>*</span></label>
                  <div style={{position: 'relative'}}>
                    <textarea id="Description_p" name="Description" maxLength={32000} rows={5} placeholder="Describe how you'd like to partner with Otic Group..." />
                  </div>
                </div>

                {/* Form Footer */}
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(26,54,93,0.1)', marginTop: '1.5rem'}} className="sm:flex-row sm:items-center">
                  <input
                    type="submit"
                    id="formsubmit_p"
                    className="formsubmit"
                    value="Submit Partnership Request"
                    title="Submit"
                  />
                  <input
                    type="reset"
                    className="form-reset-btn"
                    name="reset"
                    value="Reset"
                    title="Reset"
                  />
                </div>

                <script id="wf_anal" src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=49f7e9ea3eb748e1a519a05355b7c683e9d382e2046d7867b075ef477873bbe446389f389319e9b6b564ccf246d62906gid20fe07a6de326508ebd12eb50a156f27d06bb54c7696b2c7ac02cc83f115b3f6gidf2ed524f3a171b1201f081180054616cdb1eb71262533dd7d0b86ba0ffea80ffgidd8645853214eeb8bc69d4996bbfb4eabdea20eff61a877be1b62ce14b0c0391d&tw=94059594979d2cd4dfd43208bce2ee8cb7a143cf8c4e0fa5790ebbf46711274b"></script>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
