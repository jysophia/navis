import{c as y,A as R,a as p,s as W,d as g,S as h}from"./loadSts-C7dRSSEH.js";import{e as B,i as V,C as j,E as q,g as G,I as H,h as U,f as J,M as Q,P as X,R as Y,b as Z}from"./loadSts-C7dRSSEH.js";import"./main-BG_bJgZo.js";import{C as b,g as x,a as T,s as u}from"./index-luxUIWi9.js";import{b as ee}from"./index-luxUIWi9.js";class w extends b.classBuilder().ep(y).m(function(t,i,o,n){return[x(o,this.serialize,this.deserialize),T(o,t.getEndpointParameterInstructions())]}).s("AWSSecurityTokenServiceV20110615","AssumeRoleWithWebIdentity",{}).n("STSClient","AssumeRoleWithWebIdentityCommand").f(R,p).ser(W).de(g).build(){}const S="us-east-1",D=e=>{if(typeof(e==null?void 0:e.Arn)=="string"){const t=e.Arn.split(":");if(t.length>4&&t[4]!=="")return t[4]}},_=async(e,t,i)=>{var s;const o=typeof e=="function"?await e():e,n=typeof t=="function"?await t():t;return(s=i==null?void 0:i.debug)==null||s.call(i,"@aws-sdk/client-sts::resolveRegion","accepting first of:",`${o} (provider)`,`${n} (parent client)`,`${S} (STS default)`),o??n??S},k=(e,t)=>{let i;return async o=>{var r,l,m;if(!i){const{logger:C=(r=e==null?void 0:e.parentClientConfig)==null?void 0:r.logger,region:f,requestHandler:d=(l=e==null?void 0:e.parentClientConfig)==null?void 0:l.requestHandler,credentialProviderLogger:A}=e,E=await _(f,(m=e==null?void 0:e.parentClientConfig)==null?void 0:m.region,A),I=!F(d);i=new t({region:E,requestHandler:I?d:void 0,logger:C})}const{Credentials:n,AssumedRoleUser:s}=await i.send(new w(o));if(!n||!n.AccessKeyId||!n.SecretAccessKey)throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${o.RoleArn}`);const a=D(s),c={accessKeyId:n.AccessKeyId,secretAccessKey:n.SecretAccessKey,sessionToken:n.SessionToken,expiration:n.Expiration,...n.CredentialScope&&{credentialScope:n.CredentialScope},...a&&{accountId:a}};return a&&u(c,"RESOLVED_ACCOUNT_ID","T"),u(c,"CREDENTIALS_STS_ASSUME_ROLE_WEB_ID","k"),c}},F=e=>{var t;return((t=e==null?void 0:e.metadata)==null?void 0:t.handlerProtocol)==="h2"},v=(e,t)=>t?class extends e{constructor(o){super(o);for(const n of t)this.middlewareStack.use(n)}}:e,P=(e={},t)=>k(e,v(h,t));export{b as $Command,B as AssumeRoleCommand,V as AssumeRoleResponseFilterSensitiveLog,w as AssumeRoleWithWebIdentityCommand,R as AssumeRoleWithWebIdentityRequestFilterSensitiveLog,p as AssumeRoleWithWebIdentityResponseFilterSensitiveLog,j as CredentialsFilterSensitiveLog,q as ExpiredTokenException,G as IDPCommunicationErrorException,H as IDPRejectedClaimException,U as InvalidAuthorizationMessageException,J as InvalidIdentityTokenException,Q as MalformedPolicyDocumentException,X as PackedPolicyTooLargeException,Y as RegionDisabledException,h as STSClient,Z as STSServiceException,ee as __Client,P as getDefaultRoleAssumerWithWebIdentity};

