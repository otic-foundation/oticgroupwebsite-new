import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ZohoRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ZOHO_FORM_HTML = `
<div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm" style="background-color: white; color: black; max-width: 600px;">
  <form id="webform7179876000000665003" action="https://crm.zoho.com/crm/WebToContactForm" name="WebToContacts7179876000000665003" method="POST" onSubmit="javascript:document.charset='UTF-8'; return checkMandatory7179876000000665003()" accept-charset="UTF-8">
    <input type="text" style="display:none;" name="xnQsjsdp" value="82d655bc38614b358448593965faae083336afa04a4d4be271f56cf1e5b02b4b" />
    <input type="hidden" name="zc_gad" id="zc_gad" value="" />
    <input type="text" style="display:none;" name="xmIwtLD" value="607bb775341726795f82050ee3eb6836081b9c86342227a8611643efabe1eaeb36f4ea2b6f01c2f3bd946f53db5d8634" />
    <input type="text" style="display:none;" name="actionType" value="Q29udGFjdHM=" />
    <input type="text" style="display:none;" name="returnURL" value="https://webinar.oticgroup.net/" />
    <style>
      #crmWebToEntityForm.zcwf_lblLeft { width:100%; padding:25px; margin:0 auto; box-sizing:border-box; }
      #crmWebToEntityForm.zcwf_lblLeft * { box-sizing:border-box; }
      #crmWebToEntityForm { text-align:left; }
      #crmWebToEntityForm * { direction:ltr; }
      .zcwf_lblLeft .zcwf_title { word-wrap:break-word; padding:0px 6px 10px; font-weight:bold; }
      .zcwf_lblLeft .zcwf_col_fld input[type=text], input[type=password], .zcwf_lblLeft .zcwf_col_fld textarea { width:60%; border:1px solid #c0c6cc !important; resize:vertical; border-radius:2px; float:left; }
      .zcwf_lblLeft .zcwf_col_lab { width:30%; word-break:break-word; padding:0px 6px 0px; margin-right:10px; margin-top:5px; float:left; min-height:1px; }
      .zcwf_lblLeft .zcwf_col_fld { float:left; width:68%; padding:0px 6px 0px; position:relative; margin-top:5px; }
      .zcwf_lblLeft .zcwf_privacy { padding:6px; }
      .zcwf_lblLeft .wfrm_fld_dpNn { display:none; }
      .dIB { display:inline-block; }
      .zcwf_lblLeft .zcwf_col_fld_slt { width:60%; border:1px solid #ccc; background:#fff; border-radius:4px; font-size:12px; float:left; resize:vertical; padding:2px 5px; }
      .zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after { content:''; display:table; clear:both; }
      .zcwf_lblLeft .zcwf_col_help { float:left; margin-left:7px; font-size:12px; max-width:35%; word-break:break-word; }
      .zcwf_lblLeft .zcwf_help_icon { cursor:pointer; width:16px; height:16px; display:inline-block; background:#fff; border:1px solid #c0c6cc; color:#c1c1c1; text-align:center; font-size:11px; line-height:16px; font-weight:bold; border-radius:50%; }
      .zcwf_lblLeft .zcwf_row { margin:15px 0px; }
      .zcwf_lblLeft .formsubmit { margin-right:5px; cursor:pointer; color:#313949; font-size:12px; }
      .zcwf_lblLeft .zcwf_privacy_txt { width:90%; color:rgb(0,0,0); font-size:12px; font-family:Arial; display:inline-block; vertical-align:top; color:#313949; padding-top:2px; margin-left:6px; }
      .zcwf_lblLeft .zcwf_button { font-size:12px; color:#313949; border:1px solid #c0c6cc; padding:3px 9px; border-radius:4px; cursor:pointer; max-width:120px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
      .zcwf_lblLeft .zcwf_tooltip_over { position:relative; }
      .zcwf_lblLeft .zcwf_tooltip_ctn { position:absolute; background:#dedede; padding:3px 6px; top:3px; border-radius:4px; word-break:break-word; min-width:100px; max-width:150px; color:#313949; z-index:100; }
      .zcwf_lblLeft .zcwf_ckbox { float:left; }
      .zcwf_lblLeft .zcwf_file { width:55%; box-sizing:border-box; float:left; }
      .formsubmit.zcwf_button { color:white !important; background:transparent linear-gradient(0deg, #0279FF 0%, #00A3F3 100%); }
      .cBoth:after { content:''; display:block; clear:both; }
      @media all and (max-width:600px) {
        .zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld { width:auto; float:none !important; }
        .zcwf_lblLeft .zcwf_col_help { width:40%; }
      }
    </style>
    <div class="zcwf_title" style="max-width:600px;color:black;font-family:Arial;">Webinar Registration</div>
    <div class="zcwf_row">
      <div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="First_Name">First Name <span style="color:red;">*</span></label></div>
      <div class="zcwf_col_fld"><input type="text" id="First_Name" aria-required="true" aria-label="First Name" name="First Name" maxlength="40" /><div class="zcwf_col_help"></div></div>
    </div>
    <div class="zcwf_row">
      <div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Last_Name">Last Name <span style="color:red;">*</span></label></div>
      <div class="zcwf_col_fld"><input type="text" id="Last_Name" aria-required="true" aria-label="Last Name" name="Last Name" maxlength="80" /><div class="zcwf_col_help"></div></div>
    </div>
    <div class="zcwf_row">
      <div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Account_Name">Company <span style="color:red;">*</span></label></div>
      <div class="zcwf_col_fld"><input type="text" id="Account_Name" aria-required="true" aria-label="Account Name" name="Account Name" maxlength="100" /><div class="zcwf_col_help"></div></div>
    </div>
    <div class="zcwf_row">
      <div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Email">Work Email <span style="color:red;">*</span></label></div>
      <div class="zcwf_col_fld"><input type="text" ftype="email" autocomplete="false" id="Email" aria-required="true" aria-label="Email" name="Email" maxlength="100" /><div class="zcwf_col_help"><span title="you@company.com" style="cursor:pointer;width:16px;height:16px;display:inline-block;background:#fff;border:1px solid #c0c6cc;color:#c1c1c1;text-align:center;font-size:11px;line-height:16px;font-weight:bold;border-radius:50%;" onclick="tooltipShow7179876000000665003(this)">?</span><div class="zcwf_tooltip_over" style="display:none;"><span class="zcwf_tooltip_ctn">you@company.com</span></div></div></div>
    </div>
    <div class="zcwf_row">
      <div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Title">Job Title <span style="color:red;">*</span></label></div>
      <div class="zcwf_col_fld"><input type="text" id="Title" aria-required="true" aria-label="Title" name="Title" maxlength="100" /><div class="zcwf_col_help"></div></div>
    </div>
    <div class="zcwf_row wfrm_fld_dpNn">
      <div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Lead_Source">Lead Source</label></div>
      <div class="zcwf_col_fld">
        <select class="zcwf_col_fld_slt" id="Lead_Source" aria-required="false" aria-label="Lead Source" name="Lead Source">
          <option value="-None-">-None-</option>
          <option value="Advertisement">Advertisement</option>
          <option value="Cold Call">Cold Call</option>
          <option value="Employee Referral">Employee Referral</option>
          <option value="External Referral">External Referral</option>
          <option value="Online Store">Online Store</option>
          <option value="Partner">Partner</option>
          <option value="X (Twitter)">X (Twitter)</option>
          <option value="Public Relations">Public Relations</option>
          <option value="Facebook">Facebook</option>
          <option value="Sales Email Alias">Sales Email Alias</option>
          <option value="Seminar Partner">Seminar Partner</option>
          <option selected value="Internal Seminar">Internal Seminar</option>
          <option value="Trade Show">Trade Show</option>
          <option value="Web Download">Web Download</option>
          <option value="Web Research">Web Research</option>
          <option value="Web Cases">Web Cases</option>
          <option value="Web Mail">Web Mail</option>
          <option value="Chat">Chat</option>
        </select>
        <div class="zcwf_col_help"></div>
      </div>
    </div>
    <div class="zcwf_row">
      <div class="zcwf_privacy">
        <div class="dIB vaT" align="left">
          <div class="displayPurpose crm-small-font-size">
            <label class="newCustomchkbox-md dIB w100_per">
              <input autocomplete="off" id="privacyTool7179876000000665003" type="checkbox" aria-checked="false" name="" aria-label="privacyTool" onclick="disableErr7179876000000665003()" />
            </label>
          </div>
        </div>
        <div class="dIB zcwf_privacy_txt" style="font-size:12px;font-family:Arial;color:black;">
          <div style="font-family:Verdana,arial,Helvetica,sans-serif">I would like to receive communications about Otic tailored to my interests and preferences, including latest news about products, services, events, and promotions. For more information, please see our Privacy Policy.</div>
        </div>
        <div id="privacyErr7179876000000665003" aria-live="polite" style="font-size:12px;color:red;padding-left:5px;visibility:hidden;">Please accept this</div>
      </div>
    </div>
    <input type="text" style="display:none;" name="aG9uZXlwb3Q" value="" />
    <div class="zcwf_row">
      <div class="zcwf_col_lab"></div>
      <div class="zcwf_col_fld">
        <input type="submit" id="formsubmit" class="formsubmit zcwf_button" value="Submit" title="Submit" />
        <input type="reset" class="zcwf_button" name="reset" value="Reset" title="Reset" />
      </div>
    </div>
  </form>
</div>
`;

const ZOHO_SCRIPTS = `
function addAriaSelected7179876000000665003(){
  var optionElem = event.target;
  var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
  if(previousSelectedOption){previousSelectedOption.removeAttribute('aria-selected');}
  optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected='true';
}
function privacyAlert7179876000000665003(){
  var privacyTool=document.getElementById('privacyTool7179876000000665003');
  var privacyErr=document.getElementById('privacyErr7179876000000665003');
  if(privacyTool!=undefined&&!privacyTool.checked){privacyErr.style.visibility='visible';privacyTool.ariaInvalid='true';privacyTool.focus();return false;}
  return true;
}
function disableErr7179876000000665003(){
  var privacyTool=document.getElementById('privacyTool7179876000000665003');
  var privacyErr=document.getElementById('privacyErr7179876000000665003');
  if(privacyTool!=undefined&&privacyTool.checked&&privacyErr!=undefined){privacyErr.style.visibility='hidden';privacyTool.ariaInvalid='false';}
}
function validateEmail7179876000000665003(){
  var form=document.forms['WebToContacts7179876000000665003'];
  var emailFld=form.querySelectorAll('[ftype=email]');
  for(var i=0;i<emailFld.length;i++){
    var emailVal=emailFld[i].value;
    if((emailVal.replace(/^\\s+|\\s+$/g,'')).length!=0){
      var atpos=emailVal.indexOf('@');var dotpos=emailVal.lastIndexOf('.');
      if(atpos<1||dotpos<atpos+2||dotpos+2>=emailVal.length){alert('Please enter a valid email address.');emailFld[i].focus();return false;}
    }
  }
  return true;
}
function checkMandatory7179876000000665003(){
  var mndFileds=new Array('First Name','Last Name','Account Name','Email','Title');
  var fldLangVal=new Array('First Name','Last Name','Company','Work Email','Job Title');
  for(var i=0;i<mndFileds.length;i++){
    var fieldObj=document.forms['WebToContacts7179876000000665003'][mndFileds[i]];
    if(fieldObj){
      if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'')).length==0){
        if(fieldObj.type=='file'){alert('Please select a file to upload.');fieldObj.focus();return false;}
        alert(fldLangVal[i]+' cannot be empty.');fieldObj.focus();return false;
      }else if(fieldObj.nodeName=='SELECT'){
        if(fieldObj.options[fieldObj.selectedIndex].value=='-None-'){alert(fldLangVal[i]+' cannot be none.');fieldObj.focus();return false;}
      }else if(fieldObj.type=='checkbox'){
        if(fieldObj.checked==false){alert('Please accept '+fldLangVal[i]);fieldObj.focus();return false;}
      }
      try{if(fieldObj.name=='Last Name'){var name=fieldObj.value;}}catch(e){}
    }
  }
  if(!validateEmail7179876000000665003()){return false;}
  if(!privacyAlert7179876000000665003()){return false;}
  var urlparams=new URLSearchParams(window.location.search);
  if(urlparams.has('service')&&(urlparams.get('service')==='smarturl')){
    var webform=document.getElementById('webform7179876000000665003');
    var service=urlparams.get('service');
    var smarturlfield=document.createElement('input');
    smarturlfield.setAttribute('type','hidden');smarturlfield.setAttribute('value',service);smarturlfield.setAttribute('name','service');
    webform.appendChild(smarturlfield);
  }
  document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled',true);
}
function tooltipShow7179876000000665003(el){
  var tooltip=el.nextElementSibling;
  var tooltipDisplay=tooltip.style.display;
  if(tooltipDisplay=='none'){
    var allTooltip=document.getElementsByClassName('zcwf_tooltip_over');
    for(var i=0;i<allTooltip.length;i++){allTooltip[i].style.display='none';}
    tooltip.style.display='block';
  }else{tooltip.style.display='none';}
}
`;

const ZohoRegistrationModal = ({ open, onOpenChange }: ZohoRegistrationModalProps) => {
  const [scriptsInjected, setScriptsInjected] = useState(false);

  useEffect(() => {
    if (open && !scriptsInjected) {
      const script = document.createElement('script');
      script.textContent = ZOHO_SCRIPTS;
      document.head.appendChild(script);
      setScriptsInjected(true);
    }
  }, [open, scriptsInjected]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-foreground">Register for Webinar</DialogTitle>
        </DialogHeader>
        {open && (
          <div
            className="rounded-lg overflow-hidden min-h-[200px]"
            dangerouslySetInnerHTML={{ __html: ZOHO_FORM_HTML }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ZohoRegistrationModal;
