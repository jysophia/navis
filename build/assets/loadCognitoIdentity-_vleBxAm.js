import{c as de,d as ce,n as le,r as ue,e as pe,E as ye,f as he,h as me,i as xe,A as Ee,N as we,j as ve,p as fe,k as Se,l as ge,D as Pe,m as Ce,o as Ie,S as be,q as Ae,t as Re,u as ke,v as _e,w as Fe,x as De,y as ze,z as $e,B as Oe,F as He,b as Ne,G as Ue,H as Le,I as Te,J as Me,K as je,L as Ge,M as qe,O as Be,P as Je,Q as Ve,R as We,T as Ke,U as Xe,V as Ye,W as Qe,X as I,Y as u,Z as Ze,C as X,g as Y,a as Q}from"./index-BbWOotVE.js";import{t as et,f as tt,a as st,F as nt,s as ot,H as it,e as C,b as rt,p as at,c as dt}from"./main-N3tlzjgS.js";const Z=(e,t)=>{const s={};for(const n in t)ct(s,e,t,n);return s},ct=(e,t,s,n)=>{if(t!==null){let i=s[n];typeof i=="function"&&(i=[,i]);const[d=lt,m=ut,E=n]=i;(typeof d=="function"&&d(t[E])||typeof d!="function"&&d)&&(e[n]=m(t[E]));return}let[o,r]=s[n];if(typeof r=="function"){let i;const d=o===void 0&&(i=r())!=null,m=typeof o=="function"&&!!o(void 0)||typeof o!="function"&&!!o;d?e[n]=i:m&&(e[n]=r())}else{const i=o===void 0&&r!=null,d=typeof o=="function"&&!!o(r)||typeof o!="function"&&!!o;(i||d)&&(e[n]=r)}},lt=e=>e!=null,ut=e=>e,a=e=>{if(e==null)return{};if(Array.isArray(e))return e.filter(t=>t!=null).map(a);if(typeof e=="object"){const t={};for(const s of Object.keys(e))e[s]!=null&&(t[s]=a(e[s]));return t}return e},b=(e,t)=>de(e,t).then(s=>{if(s.length)try{return JSON.parse(s)}catch(n){throw(n==null?void 0:n.name)==="SyntaxError"&&Object.defineProperty(n,"$responseBodyText",{value:s}),n}return{}}),pt=async(e,t)=>{const s=await b(e,t);return s.message=s.message??s.Message,s},yt=(e,t)=>{const s=(r,i)=>Object.keys(r).find(d=>d.toLowerCase()===i.toLowerCase()),n=r=>{let i=r;return typeof i=="number"&&(i=i.toString()),i.indexOf(",")>=0&&(i=i.split(",")[0]),i.indexOf(":")>=0&&(i=i.split(":")[0]),i.indexOf("#")>=0&&(i=i.split("#")[1]),i},o=s(e.headers,"x-amzn-errortype");if(o!==void 0)return n(e.headers[o]);if(t.code!==void 0)return n(t.code);if(t.__type!==void 0)return n(t.__type)},ht=async(e,t,s)=>({operation:ce(t).operation,region:await le(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});function mt(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"cognito-identity",region:e.region},propertiesExtractor:(t,s)=>({signingProperties:{config:t,context:s}})}}function g(e){return{schemeId:"smithy.api#noAuth"}}const xt=e=>{const t=[];switch(e.operation){case"GetCredentialsForIdentity":{t.push(g());break}case"GetId":{t.push(g());break}case"GetOpenIdToken":{t.push(g());break}case"UnlinkIdentity":{t.push(g());break}default:t.push(mt(e))}return t},Et=e=>({...ue(e)}),wt=e=>({...e,useDualstackEndpoint:e.useDualstackEndpoint??!1,useFipsEndpoint:e.useFipsEndpoint??!1,defaultSigningName:"cognito-identity"}),ee={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}},vt="@aws-sdk/client-cognito-identity",ft="AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",St="3.714.0",gt={build:"concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'","build:cjs":"node ../../scripts/compilation/inline client-cognito-identity","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4",clean:"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo cognito-identity","test:e2e":"yarn g:vitest run -c vitest.config.e2e.ts --mode development","test:e2e:watch":"yarn g:vitest watch -c vitest.config.e2e.ts"},Pt="./dist-cjs/index.js",Ct="./dist-types/index.d.ts",It="./dist-es/index.js",bt=!1,At={"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/client-sso-oidc":"3.714.0","@aws-sdk/client-sts":"3.714.0","@aws-sdk/core":"3.714.0","@aws-sdk/credential-provider-node":"3.714.0","@aws-sdk/middleware-host-header":"3.714.0","@aws-sdk/middleware-logger":"3.714.0","@aws-sdk/middleware-recursion-detection":"3.714.0","@aws-sdk/middleware-user-agent":"3.714.0","@aws-sdk/region-config-resolver":"3.714.0","@aws-sdk/types":"3.714.0","@aws-sdk/util-endpoints":"3.714.0","@aws-sdk/util-user-agent-browser":"3.714.0","@aws-sdk/util-user-agent-node":"3.714.0","@smithy/config-resolver":"^3.0.13","@smithy/core":"^2.5.5","@smithy/fetch-http-handler":"^4.1.2","@smithy/hash-node":"^3.0.11","@smithy/invalid-dependency":"^3.0.11","@smithy/middleware-content-length":"^3.0.13","@smithy/middleware-endpoint":"^3.2.5","@smithy/middleware-retry":"^3.0.30","@smithy/middleware-serde":"^3.0.11","@smithy/middleware-stack":"^3.0.11","@smithy/node-config-provider":"^3.1.12","@smithy/node-http-handler":"^3.3.2","@smithy/protocol-http":"^4.1.8","@smithy/smithy-client":"^3.5.0","@smithy/types":"^3.7.2","@smithy/url-parser":"^3.0.11","@smithy/util-base64":"^3.0.0","@smithy/util-body-length-browser":"^3.0.0","@smithy/util-body-length-node":"^3.0.0","@smithy/util-defaults-mode-browser":"^3.0.30","@smithy/util-defaults-mode-node":"^3.0.30","@smithy/util-endpoints":"^2.1.7","@smithy/util-middleware":"^3.0.11","@smithy/util-retry":"^3.0.11","@smithy/util-utf8":"^3.0.0",tslib:"^2.6.2"},Rt={"@aws-sdk/client-iam":"3.714.0","@tsconfig/node16":"16.1.3","@types/chai":"^4.2.11","@types/node":"^16.18.96",concurrently:"7.0.0","downlevel-dts":"0.10.1",rimraf:"3.0.2",typescript:"~4.9.5"},kt={node:">=16.0.0"},_t={"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},Ft=["dist-*/**"],Dt={name:"AWS SDK for JavaScript Team",url:"https://aws.amazon.com/javascript/"},zt="Apache-2.0",$t={"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},Ot="https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",Ht={type:"git",url:"https://github.com/aws/aws-sdk-js-v3.git",directory:"clients/client-cognito-identity"},Nt={name:vt,description:ft,version:St,scripts:gt,main:Pt,types:Ct,module:It,sideEffects:bt,dependencies:At,devDependencies:Rt,engines:kt,typesVersions:_t,files:Ft,author:Dt,license:zt,browser:$t,"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},homepage:Ot,repository:Ht},te="required",y="fn",h="argv",v="ref",T=!0,M="isSet",S="booleanEquals",w="error",f="endpoint",x="tree",A="PartitionResult",j={[te]:!1,type:"String"},G={[te]:!0,default:!1,type:"Boolean"},q={[v]:"Endpoint"},se={[y]:S,[h]:[{[v]:"UseFIPS"},!0]},ne={[y]:S,[h]:[{[v]:"UseDualStack"},!0]},p={},B={[y]:"getAttr",[h]:[{[v]:A},"supportsFIPS"]},J={[y]:S,[h]:[!0,{[y]:"getAttr",[h]:[{[v]:A},"supportsDualStack"]}]},V=[se],W=[ne],K=[{[v]:"Region"}],Ut={version:"1.0",parameters:{Region:j,UseDualStack:G,UseFIPS:G,Endpoint:j},rules:[{conditions:[{[y]:M,[h]:[q]}],rules:[{conditions:V,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:w},{conditions:W,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:w},{endpoint:{url:q,properties:p,headers:p},type:f}],type:x},{conditions:[{[y]:M,[h]:K}],rules:[{conditions:[{[y]:"aws.partition",[h]:K,assign:A}],rules:[{conditions:[se,ne],rules:[{conditions:[{[y]:S,[h]:[T,B]},J],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:f}],type:x},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:w}],type:x},{conditions:V,rules:[{conditions:[{[y]:S,[h]:[B,T]}],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:f}],type:x},{error:"FIPS is enabled but this partition does not support FIPS",type:w}],type:x},{conditions:W,rules:[{conditions:[J],rules:[{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:f}],type:x},{error:"DualStack is enabled but this partition does not support DualStack",type:w}],type:x},{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:f}],type:x}],type:x},{error:"Invalid Configuration: Missing Region",type:w}]},Lt=Ut,Tt=new ye({size:50,params:["Endpoint","Region","UseDualStack","UseFIPS"]}),Mt=(e,t={})=>Tt.get(e,()=>pe(Lt,{endpointParams:e,logger:t.logger}));he.aws=me;const jt=e=>({apiVersion:"2014-06-30",base64Decoder:(e==null?void 0:e.base64Decoder)??xe,base64Encoder:(e==null?void 0:e.base64Encoder)??et,disableHostPrefix:(e==null?void 0:e.disableHostPrefix)??!1,endpointProvider:(e==null?void 0:e.endpointProvider)??Mt,extensions:(e==null?void 0:e.extensions)??[],httpAuthSchemeProvider:(e==null?void 0:e.httpAuthSchemeProvider)??xt,httpAuthSchemes:(e==null?void 0:e.httpAuthSchemes)??[{schemeId:"aws.auth#sigv4",identityProvider:t=>t.getIdentityProvider("aws.auth#sigv4"),signer:new Ee},{schemeId:"smithy.api#noAuth",identityProvider:t=>t.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new we}],logger:(e==null?void 0:e.logger)??new ve,serviceId:(e==null?void 0:e.serviceId)??"Cognito Identity",urlParser:(e==null?void 0:e.urlParser)??fe,utf8Decoder:(e==null?void 0:e.utf8Decoder)??tt,utf8Encoder:(e==null?void 0:e.utf8Encoder)??st}),Gt=e=>{const t=ke(e),s=()=>t().then(_e),n=jt(e);return{...n,...e,runtime:"browser",defaultsMode:t,bodyLengthChecker:(e==null?void 0:e.bodyLengthChecker)??Se,credentialDefaultProvider:(e==null?void 0:e.credentialDefaultProvider)??(o=>()=>Promise.reject(new Error("Credential is missing"))),defaultUserAgentProvider:(e==null?void 0:e.defaultUserAgentProvider)??ge({serviceId:n.serviceId,clientVersion:Nt.version}),maxAttempts:(e==null?void 0:e.maxAttempts)??Pe,region:(e==null?void 0:e.region)??Ce("Region is missing"),requestHandler:nt.create((e==null?void 0:e.requestHandler)??s),retryMode:(e==null?void 0:e.retryMode)??(async()=>(await s()).retryMode||Ie),sha256:(e==null?void 0:e.sha256)??be,streamCollector:(e==null?void 0:e.streamCollector)??ot,useDualstackEndpoint:(e==null?void 0:e.useDualstackEndpoint)??(()=>Promise.resolve(Ae)),useFipsEndpoint:(e==null?void 0:e.useFipsEndpoint)??(()=>Promise.resolve(Re))}},qt=e=>{const t=e.httpAuthSchemes;let s=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(o){const r=t.findIndex(i=>i.schemeId===o.schemeId);r===-1?t.push(o):t.splice(r,1,o)},httpAuthSchemes(){return t},setHttpAuthSchemeProvider(o){s=o},httpAuthSchemeProvider(){return s},setCredentials(o){n=o},credentials(){return n}}},Bt=e=>({httpAuthSchemes:e.httpAuthSchemes(),httpAuthSchemeProvider:e.httpAuthSchemeProvider(),credentials:e.credentials()}),P=e=>e,Jt=(e,t)=>{const s={...P(He(e)),...P(Fe(e)),...P(De(e)),...P(qt(e))};return t.forEach(n=>n.configure(s)),{...e,...ze(s),...$e(s),...Oe(s),...Bt(s)}};class Es extends Ne{constructor(...[t]){const s=Gt(t||{}),n=wt(s),o=Ue(n),r=Le(o),i=Te(r),d=Ye(i),m=Me(d),E=Et(m),L=Jt(E,(t==null?void 0:t.extensions)||[]);super(L),this.config=L,this.middlewareStack.use(je(this.config)),this.middlewareStack.use(Ge(this.config)),this.middlewareStack.use(qe(this.config)),this.middlewareStack.use(Be(this.config)),this.middlewareStack.use(Je(this.config)),this.middlewareStack.use(Ve(this.config)),this.middlewareStack.use(We(this.config,{httpAuthSchemeParametersProvider:ht,identityProviderConfigProvider:async ae=>new Ke({"aws.auth#sigv4":ae.credentials})})),this.middlewareStack.use(Xe(this.config))}destroy(){super.destroy()}}class c extends Qe{constructor(t){super(t),Object.setPrototypeOf(this,c.prototype)}}class R extends c{constructor(t){super({name:"InternalErrorException",$fault:"server",...t}),this.name="InternalErrorException",this.$fault="server",Object.setPrototypeOf(this,R.prototype)}}class k extends c{constructor(t){super({name:"InvalidParameterException",$fault:"client",...t}),this.name="InvalidParameterException",this.$fault="client",Object.setPrototypeOf(this,k.prototype)}}class _ extends c{constructor(t){super({name:"LimitExceededException",$fault:"client",...t}),this.name="LimitExceededException",this.$fault="client",Object.setPrototypeOf(this,_.prototype)}}class F extends c{constructor(t){super({name:"NotAuthorizedException",$fault:"client",...t}),this.name="NotAuthorizedException",this.$fault="client",Object.setPrototypeOf(this,F.prototype)}}class D extends c{constructor(t){super({name:"ResourceConflictException",$fault:"client",...t}),this.name="ResourceConflictException",this.$fault="client",Object.setPrototypeOf(this,D.prototype)}}class z extends c{constructor(t){super({name:"TooManyRequestsException",$fault:"client",...t}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,z.prototype)}}class $ extends c{constructor(t){super({name:"ResourceNotFoundException",$fault:"client",...t}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,$.prototype)}}class O extends c{constructor(t){super({name:"ExternalServiceException",$fault:"client",...t}),this.name="ExternalServiceException",this.$fault="client",Object.setPrototypeOf(this,O.prototype)}}class H extends c{constructor(t){super({name:"InvalidIdentityPoolConfigurationException",$fault:"client",...t}),this.name="InvalidIdentityPoolConfigurationException",this.$fault="client",Object.setPrototypeOf(this,H.prototype)}}class N extends c{constructor(t){super({name:"DeveloperUserAlreadyRegisteredException",$fault:"client",...t}),this.name="DeveloperUserAlreadyRegisteredException",this.$fault="client",Object.setPrototypeOf(this,N.prototype)}}class U extends c{constructor(t){super({name:"ConcurrentModificationException",$fault:"client",...t}),this.name="ConcurrentModificationException",this.$fault="client",Object.setPrototypeOf(this,U.prototype)}}const Vt=e=>({...e,...e.Logins&&{Logins:I}}),Wt=e=>({...e,...e.SecretKey&&{SecretKey:I}}),Kt=e=>({...e,...e.Credentials&&{Credentials:Wt(e.Credentials)}}),Xt=e=>({...e,...e.Logins&&{Logins:I}}),Yt=async(e,t)=>{const s=re("GetCredentialsForIdentity");let n;return n=JSON.stringify(a(e)),ie(t,s,"/",void 0,n)},Qt=async(e,t)=>{const s=re("GetId");let n;return n=JSON.stringify(a(e)),ie(t,s,"/",void 0,n)},Zt=async(e,t)=>{if(e.statusCode>=300)return oe(e,t);const s=await b(e.body,t);let n={};return n=ys(s),{$metadata:l(e),...n}},es=async(e,t)=>{if(e.statusCode>=300)return oe(e,t);const s=await b(e.body,t);let n={};return n=a(s),{$metadata:l(e),...n}},oe=async(e,t)=>{const s={...e,body:await pt(e.body,t)},n=yt(e,s.body);switch(n){case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":throw await os(s);case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":throw await rs(s);case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":throw await as(s);case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":throw await ds(s);case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":throw await cs(s);case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":throw await us(s);case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":throw await ls(s);case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":throw await ns(s);case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":throw await is(s);case"DeveloperUserAlreadyRegisteredException":case"com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":throw await ss(s);case"ConcurrentModificationException":case"com.amazonaws.cognitoidentity#ConcurrentModificationException":throw await ts(s);default:const o=s.body;return hs({output:e,parsedBody:o,errorCode:n})}},ts=async(e,t)=>{const s=e.body,n=a(s),o=new U({$metadata:l(e),...n});return u(o,s)},ss=async(e,t)=>{const s=e.body,n=a(s),o=new N({$metadata:l(e),...n});return u(o,s)},ns=async(e,t)=>{const s=e.body,n=a(s),o=new O({$metadata:l(e),...n});return u(o,s)},os=async(e,t)=>{const s=e.body,n=a(s),o=new R({$metadata:l(e),...n});return u(o,s)},is=async(e,t)=>{const s=e.body,n=a(s),o=new H({$metadata:l(e),...n});return u(o,s)},rs=async(e,t)=>{const s=e.body,n=a(s),o=new k({$metadata:l(e),...n});return u(o,s)},as=async(e,t)=>{const s=e.body,n=a(s),o=new _({$metadata:l(e),...n});return u(o,s)},ds=async(e,t)=>{const s=e.body,n=a(s),o=new F({$metadata:l(e),...n});return u(o,s)},cs=async(e,t)=>{const s=e.body,n=a(s),o=new D({$metadata:l(e),...n});return u(o,s)},ls=async(e,t)=>{const s=e.body,n=a(s),o=new $({$metadata:l(e),...n});return u(o,s)},us=async(e,t)=>{const s=e.body,n=a(s),o=new z({$metadata:l(e),...n});return u(o,s)},ps=(e,t)=>Z(e,{AccessKeyId:C,Expiration:s=>rt(at(dt(s))),SecretKey:C,SessionToken:C}),ys=(e,t)=>Z(e,{Credentials:s=>ps(s),IdentityId:C}),l=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),hs=Ze(c),ie=async(e,t,s,n,o)=>{const{hostname:r,protocol:i="https",port:d,path:m}=await e.endpoint(),E={protocol:i,hostname:r,port:d,method:"POST",path:m.endsWith("/")?m.slice(0,-1)+s:m+s,headers:t};return o!==void 0&&(E.body=o),new it(E)};function re(e){return{"content-type":"application/x-amz-json-1.1","x-amz-target":`AWSCognitoIdentityService.${e}`}}class ws extends X.classBuilder().ep(ee).m(function(t,s,n,o){return[Y(n,this.serialize,this.deserialize),Q(n,t.getEndpointParameterInstructions())]}).s("AWSCognitoIdentityService","GetCredentialsForIdentity",{}).n("CognitoIdentityClient","GetCredentialsForIdentityCommand").f(Vt,Kt).ser(Yt).de(Zt).build(){}class vs extends X.classBuilder().ep(ee).m(function(t,s,n,o){return[Y(n,this.serialize,this.deserialize),Q(n,t.getEndpointParameterInstructions())]}).s("AWSCognitoIdentityService","GetId",{}).n("CognitoIdentityClient","GetIdCommand").f(Xt,void 0).ser(Qt).de(es).build(){}export{Es as CognitoIdentityClient,ws as GetCredentialsForIdentityCommand,vs as GetIdCommand};
