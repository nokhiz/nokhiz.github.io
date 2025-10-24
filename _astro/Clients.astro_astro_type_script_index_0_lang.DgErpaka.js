const se={src:"/_astro/bbraun-logo.zA-BaQ8s.png",width:820,height:200,format:"png"};function ne(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function re(e,t){if(!t||t.line===void 0||t.column===void 0)return"";const s=ne(e).split(`
`).map(i=>i.replace(/\t/g,"  ")),n=[];for(let i=-2;i<=2;i++)s[t.line+i]&&n.push(t.line+i);let r=0;for(const i of n){let c=`> ${i}`;c.length>r&&(r=c.length)}let a="";for(const i of n){const c=i===t.line-1;a+=c?"> ":"  ",a+=`${i+1} | ${s[i]}
`,c&&(a+=`${Array.from({length:r}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return a}class ae extends Error{loc;title;hint;frame;type="AstroError";constructor(t,s){const{name:n,title:r,message:a,stack:i,location:c,hint:h,frame:l}=t;super(a,s),this.title=r,this.name=n,a&&(this.message=a),this.stack=i||this.stack,this.loc=c,this.hint=h,this.frame=l}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,s){this.frame=re(t,s)}static is(t){return t.type==="AstroError"}}const yt={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."};function ie(e){return!(e.length!==3||!e[0]||typeof e[0]!="object")}function Dt(e,t,s){const n=t?.split("/").pop()?.replace(".astro","")??"",r=(...a)=>{if(!ie(a))throw new ae({...yt,message:yt.message(n)});return e(...a)};return Object.defineProperty(r,"name",{value:n,writable:!1}),r.isAstroComponentFactory=!0,r.moduleId=t,r.propagation=s,r}function ce(e){return Dt(e.factory,e.moduleId,e.propagation)}function oe(e,t,s){return typeof e=="function"?Dt(e,t,s):ce(e)}typeof process<"u"&&process.stdout&&process.stdout.isTTY;const{replace:le}="",de=/[&<>'"]/g,he={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},ue=e=>he[e],fe=e=>le.call(e,de,ue);function U(e){return!!e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"}async function*pe(e){const t=e.getReader();try{for(;;){const{done:s,value:n}=await t.read();if(s)return;yield n}}finally{t.releaseLock()}}const me=fe;class Pt extends Uint8Array{}Object.defineProperty(Pt.prototype,Symbol.toStringTag,{get(){return"HTMLBytes"}});class tt extends String{get[Symbol.toStringTag](){return"HTMLString"}}const w=e=>e instanceof tt?e:typeof e=="string"?new tt(e):e;function ve(e){return Object.prototype.toString.call(e)==="[object HTMLString]"}function ge(e){return new Pt(e)}function Ft(e){return typeof e.getReader=="function"}async function*_t(e){if(Ft(e))for await(const t of pe(e))yield J(t);else for await(const t of e)yield J(t)}function*ye(e){for(const t of e)yield J(t)}function J(e){if(e&&typeof e=="object"){if(e instanceof Uint8Array)return ge(e);if(e instanceof Response&&e.body){const t=e.body;return _t(t)}else{if(typeof e.then=="function")return Promise.resolve(e).then(t=>J(t));if(e[Symbol.for("astro:slot-string")])return e;if(Symbol.iterator in e)return ye(e);if(Symbol.asyncIterator in e||Ft(e))return _t(e)}}return w(e)}function Gt(e){var t,s,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(s=Gt(e[t]))&&(n&&(n+=" "),n+=s)}else for(s in e)e[s]&&(n&&(n+=" "),n+=s);return n}function _e(){for(var e,t,s=0,n="",r=arguments.length;s<r;s++)(e=arguments[s])&&(t=Gt(e))&&(n&&(n+=" "),n+=t);return n}const xe=/^(?:allowfullscreen|async|autofocus|autoplay|checked|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|inert|loop|muted|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|selected|itemscope)$/i,be=/&/g,ke=/"/g,ze=new Set(["set:html","set:text"]),j=(e,t=!0)=>t?String(e).replace(be,"&#38;").replace(ke,"&#34;"):e,we=e=>e.toLowerCase()===e?e:e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),xt=e=>Object.entries(e).filter(([t,s])=>typeof s=="string"&&s.trim()||typeof s=="number").map(([t,s])=>t[0]!=="-"&&t[1]!=="-"?`${we(t)}:${s}`:`${t}:${s}`).join(";");function Me(e){return e.includes("-")}function ct(e,t,s,n){return n&&Me(n)?w(` ${e}="${j(t,s)}"`):w(t?` ${e}`:"")}function Ce(e,t,s=!0,n=""){if(e==null)return"";if(ze.has(t))return console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`),"";if(t==="class:list"){const r=j(_e(e),s);return r===""?"":w(` ${t.slice(0,-5)}="${r}"`)}if(t==="style"&&!(e instanceof tt)){if(Array.isArray(e)&&e.length===2)return w(` ${t}="${j(`${xt(e[0])};${e[1]}`,s)}"`);if(typeof e=="object")return w(` ${t}="${j(xt(e),s)}"`)}return t==="className"?w(` class="${j(e,s)}"`):typeof e=="string"&&e.includes("&")&&Te(e)?w(` ${t}="${j(e,!1)}"`):xe.test(t)?ct(t,e,s,n):e===""?w(` ${t}`):t==="popover"&&typeof e=="boolean"||t==="download"&&typeof e=="boolean"?ct(t,e,s,n):w(` ${t}="${j(e,s)}"`)}const Se=()=>{};class Ae{chunks=[];renderPromise;destination;flushed=!1;constructor(t,s){this.destination=t,this.renderPromise=s(this),U(this.renderPromise)&&Promise.resolve(this.renderPromise).catch(Se)}write(t){this.flushed?this.destination.write(t):this.chunks.push(t)}flush(){if(this.flushed)throw new Error("The render buffer has already been flushed.");this.flushed=!0;for(const t of this.chunks)this.destination.write(t);return this.renderPromise}}function qt(e,t){return new Ae(e,t)}typeof process<"u"&&Object.prototype.toString.call(process);const Le=["http:","https:"];function Te(e){try{const t=new URL(e);return Le.includes(t.protocol)}catch{return!1}}var bt;(function(e){e[e.Include=0]="Include",e[e.None=1]="None"})(bt||(bt={}));var kt;(function(e){e[e.Required=0]="Required",e[e.Ignore=1]="Ignore"})(kt||(kt={}));var zt;(function(e){e[e.Include=0]="Include",e[e.None=1]="None"})(zt||(zt={}));var wt;(function(e){e[e.Required=0]="Required",e[e.Ignore=1]="Ignore"})(wt||(wt={}));var _;(function(e){e.assertEqual=r=>{};function t(r){}e.assertIs=t;function s(r){throw new Error}e.assertNever=s,e.arrayToEnum=r=>{const a={};for(const i of r)a[i]=i;return a},e.getValidEnumValues=r=>{const a=e.objectKeys(r).filter(c=>typeof r[r[c]]!="number"),i={};for(const c of a)i[c]=r[c];return e.objectValues(i)},e.objectValues=r=>e.objectKeys(r).map(function(a){return r[a]}),e.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const a=[];for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&a.push(i);return a},e.find=(r,a)=>{for(const i of r)if(a(i))return i},e.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&Number.isFinite(r)&&Math.floor(r)===r;function n(r,a=" | "){return r.map(i=>typeof i=="string"?`'${i}'`:i).join(a)}e.joinValues=n,e.jsonStringifyReplacer=(r,a)=>typeof a=="bigint"?a.toString():a})(_||(_={}));var Mt;(function(e){e.mergeShapes=(t,s)=>({...t,...s})})(Mt||(Mt={}));const u=_.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),I=e=>{switch(typeof e){case"undefined":return u.undefined;case"string":return u.string;case"number":return Number.isNaN(e)?u.nan:u.number;case"boolean":return u.boolean;case"function":return u.function;case"bigint":return u.bigint;case"symbol":return u.symbol;case"object":return Array.isArray(e)?u.array:e===null?u.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?u.promise:typeof Map<"u"&&e instanceof Map?u.map:typeof Set<"u"&&e instanceof Set?u.set:typeof Date<"u"&&e instanceof Date?u.date:u.object;default:return u.unknown}},o=_.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class T extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const s=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,s):this.__proto__=s,this.name="ZodError",this.issues=t}format(t){const s=t||function(a){return a.message},n={_errors:[]},r=a=>{for(const i of a.issues)if(i.code==="invalid_union")i.unionErrors.map(r);else if(i.code==="invalid_return_type")r(i.returnTypeError);else if(i.code==="invalid_arguments")r(i.argumentsError);else if(i.path.length===0)n._errors.push(s(i));else{let c=n,h=0;for(;h<i.path.length;){const l=i.path[h];h===i.path.length-1?(c[l]=c[l]||{_errors:[]},c[l]._errors.push(s(i))):c[l]=c[l]||{_errors:[]},c=c[l],h++}}};return r(this),n}static assert(t){if(!(t instanceof T))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,_.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=s=>s.message){const s={},n=[];for(const r of this.issues)if(r.path.length>0){const a=r.path[0];s[a]=s[a]||[],s[a].push(t(r))}else n.push(t(r));return{formErrors:n,fieldErrors:s}}get formErrors(){return this.flatten()}}T.create=e=>new T(e);const dt=(e,t)=>{let s;switch(e.code){case o.invalid_type:e.received===u.undefined?s="Required":s=`Expected ${e.expected}, received ${e.received}`;break;case o.invalid_literal:s=`Invalid literal value, expected ${JSON.stringify(e.expected,_.jsonStringifyReplacer)}`;break;case o.unrecognized_keys:s=`Unrecognized key(s) in object: ${_.joinValues(e.keys,", ")}`;break;case o.invalid_union:s="Invalid input";break;case o.invalid_union_discriminator:s=`Invalid discriminator value. Expected ${_.joinValues(e.options)}`;break;case o.invalid_enum_value:s=`Invalid enum value. Expected ${_.joinValues(e.options)}, received '${e.received}'`;break;case o.invalid_arguments:s="Invalid function arguments";break;case o.invalid_return_type:s="Invalid function return type";break;case o.invalid_date:s="Invalid date";break;case o.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(s=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(s=`${s} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?s=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?s=`Invalid input: must end with "${e.validation.endsWith}"`:_.assertNever(e.validation):e.validation!=="regex"?s=`Invalid ${e.validation}`:s="Invalid";break;case o.too_small:e.type==="array"?s=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?s=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?s=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="bigint"?s=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?s=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:s="Invalid input";break;case o.too_big:e.type==="array"?s=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?s=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?s=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?s=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?s=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:s="Invalid input";break;case o.custom:s="Invalid input";break;case o.invalid_intersection_types:s="Intersection results could not be merged";break;case o.not_multiple_of:s=`Number must be a multiple of ${e.multipleOf}`;break;case o.not_finite:s="Number must be finite";break;default:s=t.defaultError,_.assertNever(e)}return{message:s}};let Oe=dt;function Ie(){return Oe}const Re=e=>{const{data:t,path:s,errorMaps:n,issueData:r}=e,a=[...s,...r.path||[]],i={...r,path:a};if(r.message!==void 0)return{...r,path:a,message:r.message};let c="";const h=n.filter(l=>!!l).slice().reverse();for(const l of h)c=l(i,{data:t,defaultError:c}).message;return{...r,path:a,message:c}};function d(e,t){const s=Ie(),n=Re({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,s,s===dt?void 0:dt].filter(r=>!!r)});e.common.issues.push(n)}class M{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,s){const n=[];for(const r of s){if(r.status==="aborted")return p;r.status==="dirty"&&t.dirty(),n.push(r.value)}return{status:t.value,value:n}}static async mergeObjectAsync(t,s){const n=[];for(const r of s){const a=await r.key,i=await r.value;n.push({key:a,value:i})}return M.mergeObjectSync(t,n)}static mergeObjectSync(t,s){const n={};for(const r of s){const{key:a,value:i}=r;if(a.status==="aborted"||i.status==="aborted")return p;a.status==="dirty"&&t.dirty(),i.status==="dirty"&&t.dirty(),a.value!=="__proto__"&&(typeof i.value<"u"||r.alwaysSet)&&(n[a.value]=i.value)}return{status:t.value,value:n}}}const p=Object.freeze({status:"aborted"}),W=e=>({status:"dirty",value:e}),S=e=>({status:"valid",value:e}),Ct=e=>e.status==="aborted",St=e=>e.status==="dirty",B=e=>e.status==="valid",et=e=>typeof Promise<"u"&&e instanceof Promise;var f;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(f||(f={}));class V{constructor(t,s,n,r){this._cachedPath=[],this.parent=t,this.data=s,this._path=n,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const At=(e,t)=>{if(B(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const s=new T(e.common.issues);return this._error=s,this._error}}};function g(e){if(!e)return{};const{errorMap:t,invalid_type_error:s,required_error:n,description:r}=e;if(t&&(s||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:r}:{errorMap:(i,c)=>{const{message:h}=e;return i.code==="invalid_enum_value"?{message:h??c.defaultError}:typeof c.data>"u"?{message:h??n??c.defaultError}:i.code!=="invalid_type"?{message:c.defaultError}:{message:h??s??c.defaultError}},description:r}}class y{get description(){return this._def.description}_getType(t){return I(t.data)}_getOrReturnCtx(t,s){return s||{common:t.parent.common,data:t.data,parsedType:I(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new M,ctx:{common:t.parent.common,data:t.data,parsedType:I(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const s=this._parse(t);if(et(s))throw new Error("Synchronous parse encountered promise.");return s}_parseAsync(t){const s=this._parse(t);return Promise.resolve(s)}parse(t,s){const n=this.safeParse(t,s);if(n.success)return n.data;throw n.error}safeParse(t,s){const n={common:{issues:[],async:s?.async??!1,contextualErrorMap:s?.errorMap},path:s?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:I(t)},r=this._parseSync({data:t,path:n.path,parent:n});return At(n,r)}"~validate"(t){const s={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:I(t)};if(!this["~standard"].async)try{const n=this._parseSync({data:t,path:[],parent:s});return B(n)?{value:n.value}:{issues:s.common.issues}}catch(n){n?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),s.common={issues:[],async:!0}}return this._parseAsync({data:t,path:[],parent:s}).then(n=>B(n)?{value:n.value}:{issues:s.common.issues})}async parseAsync(t,s){const n=await this.safeParseAsync(t,s);if(n.success)return n.data;throw n.error}async safeParseAsync(t,s){const n={common:{issues:[],contextualErrorMap:s?.errorMap,async:!0},path:s?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:I(t)},r=this._parse({data:t,path:n.path,parent:n}),a=await(et(r)?r:Promise.resolve(r));return At(n,a)}refine(t,s){const n=r=>typeof s=="string"||typeof s>"u"?{message:s}:typeof s=="function"?s(r):s;return this._refinement((r,a)=>{const i=t(r),c=()=>a.addIssue({code:o.custom,...n(r)});return typeof Promise<"u"&&i instanceof Promise?i.then(h=>h?!0:(c(),!1)):i?!0:(c(),!1)})}refinement(t,s){return this._refinement((n,r)=>t(n)?!0:(r.addIssue(typeof s=="function"?s(n,r):s),!1))}_refinement(t){return new P({schema:this,typeName:m.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:s=>this["~validate"](s)}}optional(){return R.create(this,this._def)}nullable(){return F.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return A.create(this)}promise(){return at.create(this,this._def)}or(t){return nt.create([this,t],this._def)}and(t){return rt.create(this,t,this._def)}transform(t){return new P({...g(this._def),schema:this,typeName:m.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const s=typeof t=="function"?t:()=>t;return new ut({...g(this._def),innerType:this,defaultValue:s,typeName:m.ZodDefault})}brand(){return new s0({typeName:m.ZodBranded,type:this,...g(this._def)})}catch(t){const s=typeof t=="function"?t:()=>t;return new ft({...g(this._def),innerType:this,catchValue:s,typeName:m.ZodCatch})}describe(t){const s=this.constructor;return new s({...this._def,description:t})}pipe(t){return mt.create(this,t)}readonly(){return pt.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Ve=/^c[^\s-]{8,}$/i,Ne=/^[0-9a-z]+$/,$e=/^[0-9A-HJKMNP-TV-Z]{26}$/i,je=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Ee=/^[a-z0-9_-]{21}$/i,Ze=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,He=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Ue=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Be="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let ot;const De=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Pe=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Fe=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Ge=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,qe=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,We=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Wt="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Je=new RegExp(`^${Wt}$`);function Jt(e){let t="[0-5]\\d";e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`);const s=e.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${s}`}function Xe(e){return new RegExp(`^${Jt(e)}$`)}function Ye(e){let t=`${Wt}T${Jt(e)}`;const s=[];return s.push(e.local?"Z?":"Z"),e.offset&&s.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${s.join("|")})`,new RegExp(`^${t}$`)}function Qe(e,t){return!!((t==="v4"||!t)&&De.test(e)||(t==="v6"||!t)&&Fe.test(e))}function Ke(e,t){if(!Ze.test(e))return!1;try{const[s]=e.split(".");if(!s)return!1;const n=s.replace(/-/g,"+").replace(/_/g,"/").padEnd(s.length+(4-s.length%4)%4,"="),r=JSON.parse(atob(n));return!(typeof r!="object"||r===null||"typ"in r&&r?.typ!=="JWT"||!r.alg||t&&r.alg!==t)}catch{return!1}}function t0(e,t){return!!((t==="v4"||!t)&&Pe.test(e)||(t==="v6"||!t)&&Ge.test(e))}class E extends y{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==u.string){const a=this._getOrReturnCtx(t);return d(a,{code:o.invalid_type,expected:u.string,received:a.parsedType}),p}const n=new M;let r;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(r=this._getOrReturnCtx(t,r),d(r,{code:o.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),n.dirty());else if(a.kind==="max")t.data.length>a.value&&(r=this._getOrReturnCtx(t,r),d(r,{code:o.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),n.dirty());else if(a.kind==="length"){const i=t.data.length>a.value,c=t.data.length<a.value;(i||c)&&(r=this._getOrReturnCtx(t,r),i?d(r,{code:o.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):c&&d(r,{code:o.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),n.dirty())}else if(a.kind==="email")Ue.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"email",code:o.invalid_string,message:a.message}),n.dirty());else if(a.kind==="emoji")ot||(ot=new RegExp(Be,"u")),ot.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"emoji",code:o.invalid_string,message:a.message}),n.dirty());else if(a.kind==="uuid")je.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"uuid",code:o.invalid_string,message:a.message}),n.dirty());else if(a.kind==="nanoid")Ee.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"nanoid",code:o.invalid_string,message:a.message}),n.dirty());else if(a.kind==="cuid")Ve.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"cuid",code:o.invalid_string,message:a.message}),n.dirty());else if(a.kind==="cuid2")Ne.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"cuid2",code:o.invalid_string,message:a.message}),n.dirty());else if(a.kind==="ulid")$e.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"ulid",code:o.invalid_string,message:a.message}),n.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{r=this._getOrReturnCtx(t,r),d(r,{validation:"url",code:o.invalid_string,message:a.message}),n.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"regex",code:o.invalid_string,message:a.message}),n.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(r=this._getOrReturnCtx(t,r),d(r,{code:o.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),n.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(r=this._getOrReturnCtx(t,r),d(r,{code:o.invalid_string,validation:{startsWith:a.value},message:a.message}),n.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(r=this._getOrReturnCtx(t,r),d(r,{code:o.invalid_string,validation:{endsWith:a.value},message:a.message}),n.dirty()):a.kind==="datetime"?Ye(a).test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{code:o.invalid_string,validation:"datetime",message:a.message}),n.dirty()):a.kind==="date"?Je.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{code:o.invalid_string,validation:"date",message:a.message}),n.dirty()):a.kind==="time"?Xe(a).test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{code:o.invalid_string,validation:"time",message:a.message}),n.dirty()):a.kind==="duration"?He.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"duration",code:o.invalid_string,message:a.message}),n.dirty()):a.kind==="ip"?Qe(t.data,a.version)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"ip",code:o.invalid_string,message:a.message}),n.dirty()):a.kind==="jwt"?Ke(t.data,a.alg)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"jwt",code:o.invalid_string,message:a.message}),n.dirty()):a.kind==="cidr"?t0(t.data,a.version)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"cidr",code:o.invalid_string,message:a.message}),n.dirty()):a.kind==="base64"?qe.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"base64",code:o.invalid_string,message:a.message}),n.dirty()):a.kind==="base64url"?We.test(t.data)||(r=this._getOrReturnCtx(t,r),d(r,{validation:"base64url",code:o.invalid_string,message:a.message}),n.dirty()):_.assertNever(a);return{status:n.value,value:t.data}}_regex(t,s,n){return this.refinement(r=>t.test(r),{validation:s,code:o.invalid_string,...f.errToObj(n)})}_addCheck(t){return new E({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...f.errToObj(t)})}url(t){return this._addCheck({kind:"url",...f.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...f.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...f.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...f.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...f.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...f.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...f.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...f.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...f.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...f.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...f.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...f.errToObj(t)})}datetime(t){return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:t?.offset??!1,local:t?.local??!1,...f.errToObj(t?.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof t?.precision>"u"?null:t?.precision,...f.errToObj(t?.message)})}duration(t){return this._addCheck({kind:"duration",...f.errToObj(t)})}regex(t,s){return this._addCheck({kind:"regex",regex:t,...f.errToObj(s)})}includes(t,s){return this._addCheck({kind:"includes",value:t,position:s?.position,...f.errToObj(s?.message)})}startsWith(t,s){return this._addCheck({kind:"startsWith",value:t,...f.errToObj(s)})}endsWith(t,s){return this._addCheck({kind:"endsWith",value:t,...f.errToObj(s)})}min(t,s){return this._addCheck({kind:"min",value:t,...f.errToObj(s)})}max(t,s){return this._addCheck({kind:"max",value:t,...f.errToObj(s)})}length(t,s){return this._addCheck({kind:"length",value:t,...f.errToObj(s)})}nonempty(t){return this.min(1,f.errToObj(t))}trim(){return new E({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new E({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new E({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t}get maxLength(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t}}E.create=e=>new E({checks:[],typeName:m.ZodString,coerce:e?.coerce??!1,...g(e)});function e0(e,t){const s=(e.toString().split(".")[1]||"").length,n=(t.toString().split(".")[1]||"").length,r=s>n?s:n,a=Number.parseInt(e.toFixed(r).replace(".","")),i=Number.parseInt(t.toFixed(r).replace(".",""));return a%i/10**r}class X extends y{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==u.number){const a=this._getOrReturnCtx(t);return d(a,{code:o.invalid_type,expected:u.number,received:a.parsedType}),p}let n;const r=new M;for(const a of this._def.checks)a.kind==="int"?_.isInteger(t.data)||(n=this._getOrReturnCtx(t,n),d(n,{code:o.invalid_type,expected:"integer",received:"float",message:a.message}),r.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(n=this._getOrReturnCtx(t,n),d(n,{code:o.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),r.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(n=this._getOrReturnCtx(t,n),d(n,{code:o.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),r.dirty()):a.kind==="multipleOf"?e0(t.data,a.value)!==0&&(n=this._getOrReturnCtx(t,n),d(n,{code:o.not_multiple_of,multipleOf:a.value,message:a.message}),r.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(n=this._getOrReturnCtx(t,n),d(n,{code:o.not_finite,message:a.message}),r.dirty()):_.assertNever(a);return{status:r.value,value:t.data}}gte(t,s){return this.setLimit("min",t,!0,f.toString(s))}gt(t,s){return this.setLimit("min",t,!1,f.toString(s))}lte(t,s){return this.setLimit("max",t,!0,f.toString(s))}lt(t,s){return this.setLimit("max",t,!1,f.toString(s))}setLimit(t,s,n,r){return new X({...this._def,checks:[...this._def.checks,{kind:t,value:s,inclusive:n,message:f.toString(r)}]})}_addCheck(t){return new X({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:f.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:f.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:f.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:f.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:f.toString(t)})}multipleOf(t,s){return this._addCheck({kind:"multipleOf",value:t,message:f.toString(s)})}finite(t){return this._addCheck({kind:"finite",message:f.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:f.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:f.toString(t)})}get minValue(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t}get maxValue(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&_.isInteger(t.value))}get isFinite(){let t=null,s=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(s===null||n.value>s)&&(s=n.value):n.kind==="max"&&(t===null||n.value<t)&&(t=n.value)}return Number.isFinite(s)&&Number.isFinite(t)}}X.create=e=>new X({checks:[],typeName:m.ZodNumber,coerce:e?.coerce||!1,...g(e)});class Y extends y{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==u.bigint)return this._getInvalidInput(t);let n;const r=new M;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(n=this._getOrReturnCtx(t,n),d(n,{code:o.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),r.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(n=this._getOrReturnCtx(t,n),d(n,{code:o.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),r.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(n=this._getOrReturnCtx(t,n),d(n,{code:o.not_multiple_of,multipleOf:a.value,message:a.message}),r.dirty()):_.assertNever(a);return{status:r.value,value:t.data}}_getInvalidInput(t){const s=this._getOrReturnCtx(t);return d(s,{code:o.invalid_type,expected:u.bigint,received:s.parsedType}),p}gte(t,s){return this.setLimit("min",t,!0,f.toString(s))}gt(t,s){return this.setLimit("min",t,!1,f.toString(s))}lte(t,s){return this.setLimit("max",t,!0,f.toString(s))}lt(t,s){return this.setLimit("max",t,!1,f.toString(s))}setLimit(t,s,n,r){return new Y({...this._def,checks:[...this._def.checks,{kind:t,value:s,inclusive:n,message:f.toString(r)}]})}_addCheck(t){return new Y({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:f.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:f.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:f.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:f.toString(t)})}multipleOf(t,s){return this._addCheck({kind:"multipleOf",value:t,message:f.toString(s)})}get minValue(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t}get maxValue(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t}}Y.create=e=>new Y({checks:[],typeName:m.ZodBigInt,coerce:e?.coerce??!1,...g(e)});class Lt extends y{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==u.boolean){const n=this._getOrReturnCtx(t);return d(n,{code:o.invalid_type,expected:u.boolean,received:n.parsedType}),p}return S(t.data)}}Lt.create=e=>new Lt({typeName:m.ZodBoolean,coerce:e?.coerce||!1,...g(e)});class st extends y{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==u.date){const a=this._getOrReturnCtx(t);return d(a,{code:o.invalid_type,expected:u.date,received:a.parsedType}),p}if(Number.isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return d(a,{code:o.invalid_date}),p}const n=new M;let r;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(r=this._getOrReturnCtx(t,r),d(r,{code:o.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),n.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(r=this._getOrReturnCtx(t,r),d(r,{code:o.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),n.dirty()):_.assertNever(a);return{status:n.value,value:new Date(t.data.getTime())}}_addCheck(t){return new st({...this._def,checks:[...this._def.checks,t]})}min(t,s){return this._addCheck({kind:"min",value:t.getTime(),message:f.toString(s)})}max(t,s){return this._addCheck({kind:"max",value:t.getTime(),message:f.toString(s)})}get minDate(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t!=null?new Date(t):null}}st.create=e=>new st({checks:[],coerce:e?.coerce||!1,typeName:m.ZodDate,...g(e)});class Tt extends y{_parse(t){if(this._getType(t)!==u.symbol){const n=this._getOrReturnCtx(t);return d(n,{code:o.invalid_type,expected:u.symbol,received:n.parsedType}),p}return S(t.data)}}Tt.create=e=>new Tt({typeName:m.ZodSymbol,...g(e)});class Ot extends y{_parse(t){if(this._getType(t)!==u.undefined){const n=this._getOrReturnCtx(t);return d(n,{code:o.invalid_type,expected:u.undefined,received:n.parsedType}),p}return S(t.data)}}Ot.create=e=>new Ot({typeName:m.ZodUndefined,...g(e)});class It extends y{_parse(t){if(this._getType(t)!==u.null){const n=this._getOrReturnCtx(t);return d(n,{code:o.invalid_type,expected:u.null,received:n.parsedType}),p}return S(t.data)}}It.create=e=>new It({typeName:m.ZodNull,...g(e)});class Q extends y{constructor(){super(...arguments),this._any=!0}_parse(t){return S(t.data)}}Q.create=e=>new Q({typeName:m.ZodAny,...g(e)});class Rt extends y{constructor(){super(...arguments),this._unknown=!0}_parse(t){return S(t.data)}}Rt.create=e=>new Rt({typeName:m.ZodUnknown,...g(e)});class N extends y{_parse(t){const s=this._getOrReturnCtx(t);return d(s,{code:o.invalid_type,expected:u.never,received:s.parsedType}),p}}N.create=e=>new N({typeName:m.ZodNever,...g(e)});class Vt extends y{_parse(t){if(this._getType(t)!==u.undefined){const n=this._getOrReturnCtx(t);return d(n,{code:o.invalid_type,expected:u.void,received:n.parsedType}),p}return S(t.data)}}Vt.create=e=>new Vt({typeName:m.ZodVoid,...g(e)});class A extends y{_parse(t){const{ctx:s,status:n}=this._processInputParams(t),r=this._def;if(s.parsedType!==u.array)return d(s,{code:o.invalid_type,expected:u.array,received:s.parsedType}),p;if(r.exactLength!==null){const i=s.data.length>r.exactLength.value,c=s.data.length<r.exactLength.value;(i||c)&&(d(s,{code:i?o.too_big:o.too_small,minimum:c?r.exactLength.value:void 0,maximum:i?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&s.data.length<r.minLength.value&&(d(s,{code:o.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&s.data.length>r.maxLength.value&&(d(s,{code:o.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),s.common.async)return Promise.all([...s.data].map((i,c)=>r.type._parseAsync(new V(s,i,s.path,c)))).then(i=>M.mergeArray(n,i));const a=[...s.data].map((i,c)=>r.type._parseSync(new V(s,i,s.path,c)));return M.mergeArray(n,a)}get element(){return this._def.type}min(t,s){return new A({...this._def,minLength:{value:t,message:f.toString(s)}})}max(t,s){return new A({...this._def,maxLength:{value:t,message:f.toString(s)}})}length(t,s){return new A({...this._def,exactLength:{value:t,message:f.toString(s)}})}nonempty(t){return this.min(1,t)}}A.create=(e,t)=>new A({type:e,minLength:null,maxLength:null,exactLength:null,typeName:m.ZodArray,...g(t)});function H(e){if(e instanceof b){const t={};for(const s in e.shape){const n=e.shape[s];t[s]=R.create(H(n))}return new b({...e._def,shape:()=>t})}else return e instanceof A?new A({...e._def,type:H(e.element)}):e instanceof R?R.create(H(e.unwrap())):e instanceof F?F.create(H(e.unwrap())):e instanceof Z?Z.create(e.items.map(t=>H(t))):e}class b extends y{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),s=_.objectKeys(t);return this._cached={shape:t,keys:s},this._cached}_parse(t){if(this._getType(t)!==u.object){const l=this._getOrReturnCtx(t);return d(l,{code:o.invalid_type,expected:u.object,received:l.parsedType}),p}const{status:n,ctx:r}=this._processInputParams(t),{shape:a,keys:i}=this._getCached(),c=[];if(!(this._def.catchall instanceof N&&this._def.unknownKeys==="strip"))for(const l in r.data)i.includes(l)||c.push(l);const h=[];for(const l of i){const v=a[l],k=r.data[l];h.push({key:{status:"valid",value:l},value:v._parse(new V(r,k,r.path,l)),alwaysSet:l in r.data})}if(this._def.catchall instanceof N){const l=this._def.unknownKeys;if(l==="passthrough")for(const v of c)h.push({key:{status:"valid",value:v},value:{status:"valid",value:r.data[v]}});else if(l==="strict")c.length>0&&(d(r,{code:o.unrecognized_keys,keys:c}),n.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const v of c){const k=r.data[v];h.push({key:{status:"valid",value:v},value:l._parse(new V(r,k,r.path,v)),alwaysSet:v in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const l=[];for(const v of h){const k=await v.key,x=await v.value;l.push({key:k,value:x,alwaysSet:v.alwaysSet})}return l}).then(l=>M.mergeObjectSync(n,l)):M.mergeObjectSync(n,h)}get shape(){return this._def.shape()}strict(t){return f.errToObj,new b({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(s,n)=>{const r=this._def.errorMap?.(s,n).message??n.defaultError;return s.code==="unrecognized_keys"?{message:f.errToObj(t).message??r}:{message:r}}}:{}})}strip(){return new b({...this._def,unknownKeys:"strip"})}passthrough(){return new b({...this._def,unknownKeys:"passthrough"})}extend(t){return new b({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new b({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:m.ZodObject})}setKey(t,s){return this.augment({[t]:s})}catchall(t){return new b({...this._def,catchall:t})}pick(t){const s={};for(const n of _.objectKeys(t))t[n]&&this.shape[n]&&(s[n]=this.shape[n]);return new b({...this._def,shape:()=>s})}omit(t){const s={};for(const n of _.objectKeys(this.shape))t[n]||(s[n]=this.shape[n]);return new b({...this._def,shape:()=>s})}deepPartial(){return H(this)}partial(t){const s={};for(const n of _.objectKeys(this.shape)){const r=this.shape[n];t&&!t[n]?s[n]=r:s[n]=r.optional()}return new b({...this._def,shape:()=>s})}required(t){const s={};for(const n of _.objectKeys(this.shape))if(t&&!t[n])s[n]=this.shape[n];else{let a=this.shape[n];for(;a instanceof R;)a=a._def.innerType;s[n]=a}return new b({...this._def,shape:()=>s})}keyof(){return Xt(_.objectKeys(this.shape))}}b.create=(e,t)=>new b({shape:()=>e,unknownKeys:"strip",catchall:N.create(),typeName:m.ZodObject,...g(t)});b.strictCreate=(e,t)=>new b({shape:()=>e,unknownKeys:"strict",catchall:N.create(),typeName:m.ZodObject,...g(t)});b.lazycreate=(e,t)=>new b({shape:e,unknownKeys:"strip",catchall:N.create(),typeName:m.ZodObject,...g(t)});class nt extends y{_parse(t){const{ctx:s}=this._processInputParams(t),n=this._def.options;function r(a){for(const c of a)if(c.result.status==="valid")return c.result;for(const c of a)if(c.result.status==="dirty")return s.common.issues.push(...c.ctx.common.issues),c.result;const i=a.map(c=>new T(c.ctx.common.issues));return d(s,{code:o.invalid_union,unionErrors:i}),p}if(s.common.async)return Promise.all(n.map(async a=>{const i={...s,common:{...s.common,issues:[]},parent:null};return{result:await a._parseAsync({data:s.data,path:s.path,parent:i}),ctx:i}})).then(r);{let a;const i=[];for(const h of n){const l={...s,common:{...s.common,issues:[]},parent:null},v=h._parseSync({data:s.data,path:s.path,parent:l});if(v.status==="valid")return v;v.status==="dirty"&&!a&&(a={result:v,ctx:l}),l.common.issues.length&&i.push(l.common.issues)}if(a)return s.common.issues.push(...a.ctx.common.issues),a.result;const c=i.map(h=>new T(h));return d(s,{code:o.invalid_union,unionErrors:c}),p}}get options(){return this._def.options}}nt.create=(e,t)=>new nt({options:e,typeName:m.ZodUnion,...g(t)});function ht(e,t){const s=I(e),n=I(t);if(e===t)return{valid:!0,data:e};if(s===u.object&&n===u.object){const r=_.objectKeys(t),a=_.objectKeys(e).filter(c=>r.indexOf(c)!==-1),i={...e,...t};for(const c of a){const h=ht(e[c],t[c]);if(!h.valid)return{valid:!1};i[c]=h.data}return{valid:!0,data:i}}else if(s===u.array&&n===u.array){if(e.length!==t.length)return{valid:!1};const r=[];for(let a=0;a<e.length;a++){const i=e[a],c=t[a],h=ht(i,c);if(!h.valid)return{valid:!1};r.push(h.data)}return{valid:!0,data:r}}else return s===u.date&&n===u.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class rt extends y{_parse(t){const{status:s,ctx:n}=this._processInputParams(t),r=(a,i)=>{if(Ct(a)||Ct(i))return p;const c=ht(a.value,i.value);return c.valid?((St(a)||St(i))&&s.dirty(),{status:s.value,value:c.data}):(d(n,{code:o.invalid_intersection_types}),p)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([a,i])=>r(a,i)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}rt.create=(e,t,s)=>new rt({left:e,right:t,typeName:m.ZodIntersection,...g(s)});class Z extends y{_parse(t){const{status:s,ctx:n}=this._processInputParams(t);if(n.parsedType!==u.array)return d(n,{code:o.invalid_type,expected:u.array,received:n.parsedType}),p;if(n.data.length<this._def.items.length)return d(n,{code:o.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),p;!this._def.rest&&n.data.length>this._def.items.length&&(d(n,{code:o.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),s.dirty());const a=[...n.data].map((i,c)=>{const h=this._def.items[c]||this._def.rest;return h?h._parse(new V(n,i,n.path,c)):null}).filter(i=>!!i);return n.common.async?Promise.all(a).then(i=>M.mergeArray(s,i)):M.mergeArray(s,a)}get items(){return this._def.items}rest(t){return new Z({...this._def,rest:t})}}Z.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Z({items:e,typeName:m.ZodTuple,rest:null,...g(t)})};class Nt extends y{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:s,ctx:n}=this._processInputParams(t);if(n.parsedType!==u.map)return d(n,{code:o.invalid_type,expected:u.map,received:n.parsedType}),p;const r=this._def.keyType,a=this._def.valueType,i=[...n.data.entries()].map(([c,h],l)=>({key:r._parse(new V(n,c,n.path,[l,"key"])),value:a._parse(new V(n,h,n.path,[l,"value"]))}));if(n.common.async){const c=new Map;return Promise.resolve().then(async()=>{for(const h of i){const l=await h.key,v=await h.value;if(l.status==="aborted"||v.status==="aborted")return p;(l.status==="dirty"||v.status==="dirty")&&s.dirty(),c.set(l.value,v.value)}return{status:s.value,value:c}})}else{const c=new Map;for(const h of i){const l=h.key,v=h.value;if(l.status==="aborted"||v.status==="aborted")return p;(l.status==="dirty"||v.status==="dirty")&&s.dirty(),c.set(l.value,v.value)}return{status:s.value,value:c}}}}Nt.create=(e,t,s)=>new Nt({valueType:t,keyType:e,typeName:m.ZodMap,...g(s)});class K extends y{_parse(t){const{status:s,ctx:n}=this._processInputParams(t);if(n.parsedType!==u.set)return d(n,{code:o.invalid_type,expected:u.set,received:n.parsedType}),p;const r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(d(n,{code:o.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),s.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(d(n,{code:o.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),s.dirty());const a=this._def.valueType;function i(h){const l=new Set;for(const v of h){if(v.status==="aborted")return p;v.status==="dirty"&&s.dirty(),l.add(v.value)}return{status:s.value,value:l}}const c=[...n.data.values()].map((h,l)=>a._parse(new V(n,h,n.path,l)));return n.common.async?Promise.all(c).then(h=>i(h)):i(c)}min(t,s){return new K({...this._def,minSize:{value:t,message:f.toString(s)}})}max(t,s){return new K({...this._def,maxSize:{value:t,message:f.toString(s)}})}size(t,s){return this.min(t,s).max(t,s)}nonempty(t){return this.min(1,t)}}K.create=(e,t)=>new K({valueType:e,minSize:null,maxSize:null,typeName:m.ZodSet,...g(t)});class $t extends y{get schema(){return this._def.getter()}_parse(t){const{ctx:s}=this._processInputParams(t);return this._def.getter()._parse({data:s.data,path:s.path,parent:s})}}$t.create=(e,t)=>new $t({getter:e,typeName:m.ZodLazy,...g(t)});class jt extends y{_parse(t){if(t.data!==this._def.value){const s=this._getOrReturnCtx(t);return d(s,{received:s.data,code:o.invalid_literal,expected:this._def.value}),p}return{status:"valid",value:t.data}}get value(){return this._def.value}}jt.create=(e,t)=>new jt({value:e,typeName:m.ZodLiteral,...g(t)});function Xt(e,t){return new D({values:e,typeName:m.ZodEnum,...g(t)})}class D extends y{_parse(t){if(typeof t.data!="string"){const s=this._getOrReturnCtx(t),n=this._def.values;return d(s,{expected:_.joinValues(n),received:s.parsedType,code:o.invalid_type}),p}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(t.data)){const s=this._getOrReturnCtx(t),n=this._def.values;return d(s,{received:s.data,code:o.invalid_enum_value,options:n}),p}return S(t.data)}get options(){return this._def.values}get enum(){const t={};for(const s of this._def.values)t[s]=s;return t}get Values(){const t={};for(const s of this._def.values)t[s]=s;return t}get Enum(){const t={};for(const s of this._def.values)t[s]=s;return t}extract(t,s=this._def){return D.create(t,{...this._def,...s})}exclude(t,s=this._def){return D.create(this.options.filter(n=>!t.includes(n)),{...this._def,...s})}}D.create=Xt;class Et extends y{_parse(t){const s=_.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(t);if(n.parsedType!==u.string&&n.parsedType!==u.number){const r=_.objectValues(s);return d(n,{expected:_.joinValues(r),received:n.parsedType,code:o.invalid_type}),p}if(this._cache||(this._cache=new Set(_.getValidEnumValues(this._def.values))),!this._cache.has(t.data)){const r=_.objectValues(s);return d(n,{received:n.data,code:o.invalid_enum_value,options:r}),p}return S(t.data)}get enum(){return this._def.values}}Et.create=(e,t)=>new Et({values:e,typeName:m.ZodNativeEnum,...g(t)});class at extends y{unwrap(){return this._def.type}_parse(t){const{ctx:s}=this._processInputParams(t);if(s.parsedType!==u.promise&&s.common.async===!1)return d(s,{code:o.invalid_type,expected:u.promise,received:s.parsedType}),p;const n=s.parsedType===u.promise?s.data:Promise.resolve(s.data);return S(n.then(r=>this._def.type.parseAsync(r,{path:s.path,errorMap:s.common.contextualErrorMap})))}}at.create=(e,t)=>new at({type:e,typeName:m.ZodPromise,...g(t)});class P extends y{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===m.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:s,ctx:n}=this._processInputParams(t),r=this._def.effect||null,a={addIssue:i=>{d(n,i),i.fatal?s.abort():s.dirty()},get path(){return n.path}};if(a.addIssue=a.addIssue.bind(a),r.type==="preprocess"){const i=r.transform(n.data,a);if(n.common.async)return Promise.resolve(i).then(async c=>{if(s.value==="aborted")return p;const h=await this._def.schema._parseAsync({data:c,path:n.path,parent:n});return h.status==="aborted"?p:h.status==="dirty"||s.value==="dirty"?W(h.value):h});{if(s.value==="aborted")return p;const c=this._def.schema._parseSync({data:i,path:n.path,parent:n});return c.status==="aborted"?p:c.status==="dirty"||s.value==="dirty"?W(c.value):c}}if(r.type==="refinement"){const i=c=>{const h=r.refinement(c,a);if(n.common.async)return Promise.resolve(h);if(h instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(n.common.async===!1){const c=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return c.status==="aborted"?p:(c.status==="dirty"&&s.dirty(),i(c.value),{status:s.value,value:c.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(c=>c.status==="aborted"?p:(c.status==="dirty"&&s.dirty(),i(c.value).then(()=>({status:s.value,value:c.value}))))}if(r.type==="transform")if(n.common.async===!1){const i=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!B(i))return p;const c=r.transform(i.value,a);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:s.value,value:c}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(i=>B(i)?Promise.resolve(r.transform(i.value,a)).then(c=>({status:s.value,value:c})):p);_.assertNever(r)}}P.create=(e,t,s)=>new P({schema:e,typeName:m.ZodEffects,effect:t,...g(s)});P.createWithPreprocess=(e,t,s)=>new P({schema:t,effect:{type:"preprocess",transform:e},typeName:m.ZodEffects,...g(s)});class R extends y{_parse(t){return this._getType(t)===u.undefined?S(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}R.create=(e,t)=>new R({innerType:e,typeName:m.ZodOptional,...g(t)});class F extends y{_parse(t){return this._getType(t)===u.null?S(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}F.create=(e,t)=>new F({innerType:e,typeName:m.ZodNullable,...g(t)});class ut extends y{_parse(t){const{ctx:s}=this._processInputParams(t);let n=s.data;return s.parsedType===u.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:s.path,parent:s})}removeDefault(){return this._def.innerType}}ut.create=(e,t)=>new ut({innerType:e,typeName:m.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...g(t)});class ft extends y{_parse(t){const{ctx:s}=this._processInputParams(t),n={...s,common:{...s.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return et(r)?r.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new T(n.common.issues)},input:n.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new T(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}ft.create=(e,t)=>new ft({innerType:e,typeName:m.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...g(t)});class Zt extends y{_parse(t){if(this._getType(t)!==u.nan){const n=this._getOrReturnCtx(t);return d(n,{code:o.invalid_type,expected:u.nan,received:n.parsedType}),p}return{status:"valid",value:t.data}}}Zt.create=e=>new Zt({typeName:m.ZodNaN,...g(e)});class s0 extends y{_parse(t){const{ctx:s}=this._processInputParams(t),n=s.data;return this._def.type._parse({data:n,path:s.path,parent:s})}unwrap(){return this._def.type}}class mt extends y{_parse(t){const{status:s,ctx:n}=this._processInputParams(t);if(n.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return a.status==="aborted"?p:a.status==="dirty"?(s.dirty(),W(a.value)):this._def.out._parseAsync({data:a.value,path:n.path,parent:n})})();{const r=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return r.status==="aborted"?p:r.status==="dirty"?(s.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:n.path,parent:n})}}static create(t,s){return new mt({in:t,out:s,typeName:m.ZodPipeline})}}class pt extends y{_parse(t){const s=this._def.innerType._parse(t),n=r=>(B(r)&&(r.value=Object.freeze(r.value)),r);return et(s)?s.then(r=>n(r)):n(s)}unwrap(){return this._def.innerType}}pt.create=(e,t)=>new pt({innerType:e,typeName:m.ZodReadonly,...g(t)});function Ht(e,t){const s=typeof e=="function"?e(t):typeof e=="string"?{message:e}:e;return typeof s=="string"?{message:s}:s}function Yt(e,t={},s){return e?Q.create().superRefine((n,r)=>{const a=e(n);if(a instanceof Promise)return a.then(i=>{if(!i){const c=Ht(t,n),h=c.fatal??s??!0;r.addIssue({code:"custom",...c,fatal:h})}});if(!a){const i=Ht(t,n),c=i.fatal??s??!0;r.addIssue({code:"custom",...i,fatal:c})}}):Q.create()}var m;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(m||(m={}));Q.create;N.create;A.create;nt.create;rt.create;Z.create;const n0=D.create;at.create;R.create;F.create;const Qt={"SHA-256":"sha256-","SHA-384":"sha384-","SHA-512":"sha512-"},r0=Object.values(Qt);n0(Object.keys(Qt)).optional().default("SHA-256");Yt(e=>typeof e!="string"?!1:r0.some(t=>e.startsWith(t)));const a0=["base-uri","child-src","connect-src","default-src","fenced-frame-src","font-src","form-action","frame-ancestors","frame-src","img-src","manifest-src","media-src","object-src","referrer","report-to","report-uri","require-trusted-types-for","sandbox","trusted-types","upgrade-insecure-requests","worker-src"];Yt(e=>typeof e!="string"?!1:a0.some(t=>e.startsWith(t)));new TextEncoder;new TextDecoder;const Kt=Symbol.for("astro.renderTemplateResult");class i0{[Kt]=!0;htmlParts;expressions;error;constructor(t,s){this.htmlParts=t,this.error=void 0,this.expressions=s.map(n=>U(n)?Promise.resolve(n).catch(r=>{if(!this.error)throw this.error=r,r}):n)}render(t){const s=this.expressions.map(a=>qt(t,i=>{if(a||a===0)return G(i,a)}));let n=0;const r=()=>{for(;n<this.htmlParts.length;){const a=this.htmlParts[n],i=s[n];if(n++,a&&t.write(w(a)),i){const c=i.flush();if(U(c))return c.then(r)}}};return r()}}function c0(e){return typeof e=="object"&&e!==null&&!!e[Kt]}function o0(e,...t){return new i0(e,t)}const Ut=Symbol.for("astro:slot-string");class l0 extends tt{instructions;[Ut];constructor(t,s){super(t),this.instructions=s,this[Ut]=!0}}w(`async function replaceServerIsland(id, r) {
	let s = document.querySelector(\`script[data-island-id="\${id}"]\`);
	// If there's no matching script, or the request fails then return
	if (!s || r.status !== 200 || r.headers.get('content-type')?.split(';')[0].trim() !== 'text/html') return;
	// Load the HTML before modifying the DOM in case of errors
	let html = await r.text();
	// Remove any placeholder content before the island script
	while (s.previousSibling && s.previousSibling.nodeType !== 8 && s.previousSibling.data !== '[if astro]>server-island-start<![endif]')
		s.previousSibling.remove();
	s.previousSibling?.remove();
	// Insert the new HTML
	s.before(document.createRange().createContextualFragment(html));
	// Remove the script. Prior to v5.4.2, this was the trick to force rerun of scripts.  Keeping it to minimize change to the existing behavior.
	s.remove();
}`.split(`
`).map(e=>e.trim()).filter(e=>e&&!e.startsWith("//")).join(" "));new TextEncoder;new TextDecoder;function d0(e){return!!e&&typeof e=="object"&&"render"in e&&typeof e.render=="function"}function G(e,t){if(U(t))return t.then(s=>G(e,s));if(t instanceof l0){e.write(t);return}if(ve(t)){e.write(t);return}if(Array.isArray(t))return h0(e,t);if(typeof t=="function")return G(e,t());if(!(!t&&t!==0)){if(typeof t=="string"){e.write(w(me(t)));return}if(d0(t)||c0(t)||m0(t))return t.render(e);if(ArrayBuffer.isView(t)){e.write(t);return}if(typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t))return Symbol.asyncIterator in t?f0(e,t):u0(e,t);e.write(t)}}function h0(e,t){const n=t.map(a=>qt(e,i=>G(i,a)))[Symbol.iterator](),r=()=>{for(;;){const{value:a,done:i}=n.next();if(i)break;const c=a.flush();if(U(c))return c.then(r)}};return r()}function u0(e,t){const s=t[Symbol.iterator](),n=()=>{for(;;){const{value:r,done:a}=s.next();if(a)break;const i=G(e,r);if(U(i))return i.then(n)}};return n()}async function f0(e,t){for await(const s of t)await G(e,s)}const p0=Symbol.for("astro.componentInstance");function m0(e){return typeof e=="object"&&e!==null&&!!e[p0]}/*! https://mths.be/cssesc v3.0.0 by @mathias */var lt,Bt;function v0(){if(Bt)return lt;Bt=1;var e={},t=e.hasOwnProperty,s=function(h,l){if(!h)return l;var v={};for(var k in l)v[k]=t.call(h,k)?h[k]:l[k];return v},n=/[ -,\.\/:-@\[-\^`\{-~]/,r=/[ -,\.\/:-@\[\]\^`\{-~]/,a=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,i=function c(h,l){l=s(l,c.options),l.quotes!="single"&&l.quotes!="double"&&(l.quotes="single");for(var v=l.quotes=="double"?'"':"'",k=l.isIdentifier,x=h.charAt(0),z="",O=0,vt=h.length;O<vt;){var C=h.charAt(O++),L=C.charCodeAt(),$=void 0;if(L<32||L>126){if(L>=55296&&L<=56319&&O<vt){var gt=h.charCodeAt(O++);(gt&64512)==56320?L=((L&1023)<<10)+(gt&1023)+65536:O--}$="\\"+L.toString(16).toUpperCase()+" "}else l.escapeEverything?n.test(C)?$="\\"+C:$="\\"+L.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(C)?$="\\"+L.toString(16).toUpperCase()+" ":C=="\\"||!k&&(C=='"'&&v==C||C=="'"&&v==C)||k&&r.test(C)?$="\\"+C:$=C;z+=$}return k&&(/^-[-\d]/.test(z)?z="\\-"+z.slice(1):/\d/.test(x)&&(z="\\3"+x+" "+z.slice(1))),z=z.replace(a,function(te,it,ee){return it&&it.length%2?te:(it||"")+ee}),!k&&l.wrap?v+z+v:z};return i.options={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1},i.version="3.0.0",lt=i,lt}v0();"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((e,t)=>(e[t.charCodeAt(0)]=t,e),[]);"-0123456789_".split("").reduce((e,t)=>(e[t.charCodeAt(0)]=t,e),[]);function g0(e={},t,{class:s}={}){let n="";s&&(typeof e.class<"u"?e.class+=` ${s}`:typeof e["class:list"]<"u"?e["class:list"]=[e["class:list"],s]:e.class=s);for(const[r,a]of Object.entries(e))n+=Ce(a,r,!0,t);return w(n)}function q({meta:e,attributes:t,children:s}){const n=oe((r,a)=>{const i=b0(t,a);return o0`<svg${g0(i)}>${J(s)}</svg>`});return Object.defineProperty(n,"toJSON",{value:()=>e,enumerable:!1}),Object.assign(n,e)}const y0=["xmlns","xmlns:xlink","version"],_0={};function x0(e){for(const t of y0)delete e[t];return e}function b0(e,t){return x0({..._0,...e,...t})}const k0=q({meta:{src:"/_astro/bmw-logo.CpUXx7ZE.svg",width:1015,height:1015,format:"svg"},attributes:{height:"1015",viewBox:"-.68 -.847 1015 1015",width:"1015"},children:`
   <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-74.1968" x2="1001.2502" y1="-54.6484" y2="984.5881">
      <stop offset="0" stop-color="#dff4ff" />
      <stop offset=".0984" stop-color="#d6eaf5" />
      <stop offset=".2678" stop-color="#bfd0d9" />
      <stop offset=".4879" stop-color="#98a5ac" />
      <stop offset=".7469" stop-color="#646b6e" />
      <stop offset="1" stop-color="#2b2b2b" />
   </linearGradient>
   <radialGradient id="b" cx="-6.3174" cy="33.522" gradientUnits="userSpaceOnUse" r="720.1076">
      <stop offset="0" stop-color="#fff" />
      <stop offset=".3064" stop-color="#a8a8a8" />
      <stop offset=".6461" stop-color="#4f4f4f" />
      <stop offset=".8853" stop-color="#161616" />
      <stop offset="1" />
   </radialGradient>
   <linearGradient id="c" gradientTransform="matrix(-1 0 0 -1 930.9756 1169.3057)" gradientUnits="userSpaceOnUse" x1="54.041" x2="738.989" y1="304.8472" y2="966.7329">
      <stop offset="0" stop-color="#dff4ff" />
      <stop offset=".0855" stop-color="#d6eaf5" />
      <stop offset=".2327" stop-color="#bed0d9" />
      <stop offset=".4239" stop-color="#96a4ac" />
      <stop offset=".6516" stop-color="#5f686d" />
      <stop offset=".9075" stop-color="#1a1d1e" />
      <stop offset="1" />
   </linearGradient>
   <linearGradient id="d">
      <stop offset="0" stop-color="#fff" />
      <stop offset=".3102" stop-color="#fdfdfd" />
      <stop offset=".4505" stop-color="#f6f6f6" />
      <stop offset=".5567" stop-color="#e9e9e9" />
      <stop offset=".6456" stop-color="#d7d7d7" />
      <stop offset=".7238" stop-color="#bfbfbf" />
      <stop offset=".7944" stop-color="#a2a2a2" />
      <stop offset=".8593" stop-color="#808080" />
      <stop offset=".9199" stop-color="#575757" />
      <stop offset=".9746" stop-color="#2b2b2b" />
      <stop offset="1" stop-color="#141414" />
   </linearGradient>
   <radialGradient id="e" cx="-135.6465" cy="-39.812" gradientUnits="userSpaceOnUse" r="1730.3135" xlink:href="#d" />
   <radialGradient id="f" cx="-135.7231" cy="-39.8115" gradientUnits="userSpaceOnUse" r="1730.4609" xlink:href="#d" />
   <radialGradient id="g" cx="-135.8174" cy="-40.3198" gradientUnits="userSpaceOnUse" r="1731.7866" xlink:href="#d" />
   <linearGradient id="h">
      <stop offset="0" stop-color="#e6e6e6" />
      <stop offset=".1045" stop-color="#d6d6d6" />
      <stop offset=".3074" stop-color="#adadad" />
      <stop offset=".5884" stop-color="#6c6c6c" />
      <stop offset=".9335" stop-color="#121212" />
      <stop offset="1" />
   </linearGradient>
   <radialGradient id="i" cx="174.2534" cy="200.0752" gradientUnits="userSpaceOnUse" r="466.7181" xlink:href="#h" />
   <radialGradient id="j" cx="301.9058" cy="262.8477" gradientUnits="userSpaceOnUse" r="678.7418">
      <stop offset="0" stop-color="#fff" />
      <stop offset=".3435" stop-color="#fdfdfd" />
      <stop offset=".4814" stop-color="#f6f6f6" />
      <stop offset=".5824" stop-color="#eaeaea" />
      <stop offset=".6654" stop-color="#d8d8d8" />
      <stop offset=".7373" stop-color="#c2c2c2" />
      <stop offset=".8016" stop-color="#a6a6a6" />
      <stop offset=".8602" stop-color="#848484" />
      <stop offset=".9126" stop-color="#5f5f5f" />
      <stop offset=".9494" stop-color="#404040" />
      <stop offset=".9566" stop-color="#404040" />
      <stop offset="1" stop-color="#404040" />
      <stop offset="1" />
   </radialGradient>
   <linearGradient id="k">
      <stop offset=".1685" stop-color="#fff" />
      <stop offset=".1957" stop-color="#e0eff7" />
      <stop offset=".2406" stop-color="#b2d9ec" />
      <stop offset=".2872" stop-color="#8bc5e2" />
      <stop offset=".335" stop-color="#6bb5da" />
      <stop offset=".3844" stop-color="#52a9d4" />
      <stop offset=".4359" stop-color="#41a0cf" />
      <stop offset=".4911" stop-color="#369bcd" />
      <stop offset=".5562" stop-color="#39c" />
      <stop offset=".606" stop-color="#3396c8" />
      <stop offset=".6553" stop-color="#328ebc" />
      <stop offset=".7045" stop-color="#3180a8" />
      <stop offset=".7536" stop-color="#2f6d8c" />
      <stop offset=".8027" stop-color="#2d5468" />
      <stop offset=".8512" stop-color="#2a373d" />
      <stop offset=".8708" stop-color="#292929" />
   </linearGradient>
   <radialGradient id="l" cx="102.6182" cy="5.5596" gradientUnits="userSpaceOnUse" r="1202.0598" xlink:href="#k" />
   <radialGradient id="m" cx="102.6182" cy="5.5513" gradientUnits="userSpaceOnUse" r="1202.0366" xlink:href="#k" />
   <radialGradient id="n" cx="180.6274" cy="205.9541" gradientUnits="userSpaceOnUse" r="457.773" xlink:href="#h" />
   <linearGradient id="o">
      <stop offset="0" stop-color="#f0f4ff" />
      <stop offset=".1086" stop-color="#ebeff9" />
      <stop offset=".2475" stop-color="#dce0ea" />
      <stop offset=".4028" stop-color="#c4c7cf" />
      <stop offset=".5701" stop-color="#a2a4ab" />
      <stop offset=".7469" stop-color="#76777c" />
      <stop offset=".9291" stop-color="#414243" />
      <stop offset="1" stop-color="#2b2b2b" />
   </linearGradient>
   <linearGradient id="p" gradientUnits="userSpaceOnUse" x1="446.8354" x2="893.2535" xlink:href="#o" y1="91.6548" y2="523.0419" />
   <linearGradient id="q" gradientUnits="userSpaceOnUse" x1="84.4878" x2="530.9141" xlink:href="#o" y1="455.8701" y2="887.2653" />
   <linearGradient id="r" gradientUnits="userSpaceOnUse" x1="300.459" x2="531.948" y1="302.0415" y2="525.7363">
      <stop offset="0" stop-color="#c2d7e8" />
      <stop offset=".1337" stop-color="#bacfe1" />
      <stop offset=".3425" stop-color="#a4bacd" />
      <stop offset=".6001" stop-color="#8098ac" />
      <stop offset=".894" stop-color="#4e697f" />
      <stop offset="1" stop-color="#3a566d" />
   </linearGradient>
   <linearGradient id="s" gradientUnits="userSpaceOnUse" x1="184.5244" x2="626.4575" y1="356.8545" y2="783.9076">
      <stop offset="0" stop-color="#f0f4ff" />
      <stop offset=".0973" stop-color="#e8ebf6" />
      <stop offset=".2568" stop-color="#d1d4dd" />
      <stop offset=".4587" stop-color="#abaeb5" />
      <stop offset=".6951" stop-color="#78797d" />
      <stop offset=".9578" stop-color="#363637" />
      <stop offset="1" stop-color="#2b2b2b" />
   </linearGradient>
   <linearGradient id="t" gradientUnits="userSpaceOnUse" x1="510.2568" x2="665.2748" y1="515.2671" y2="665.0656">
      <stop offset="0" stop-color="#d9def0" />
      <stop offset=".1229" stop-color="#d4daec" />
      <stop offset=".2629" stop-color="#c7cfe2" />
      <stop offset=".4114" stop-color="#b0bcd1" />
      <stop offset=".5657" stop-color="#90a1b8" />
      <stop offset=".7246" stop-color="#677f99" />
      <stop offset=".8849" stop-color="#355674" />
      <stop offset=".9719" stop-color="#173d5d" />
   </linearGradient>
   <linearGradient id="u" gradientUnits="userSpaceOnUse" x1="351.6777" x2="793.1321" xlink:href="#o" y1="194.7759" y2="621.3665" />
   <path d="m506.86 0c-279.92 0-506.86 226.918-506.86 506.848 0 279.926 226.94 506.848 506.86 506.848 279.94 0 506.857-226.922 506.857-506.848.001-279.93-226.916-506.848-506.857-506.848zm0 988.352c-265.939 0-481.495-215.574-481.495-481.504 0-265.927 215.556-481.512 481.495-481.512 265.937 0 481.511 215.584 481.511 481.512 0 265.93-215.574 481.504-481.511 481.504z" fill="url(#a)" />
   <path d="m992.003 506.848c0 267.914-217.227 485.133-485.143 485.133-267.919 0-485.123-217.219-485.123-485.133 0-267.929 217.204-485.133 485.123-485.133 267.916 0 485.143 217.204 485.143 485.133z" fill="#333" />
   <path d="m988.371 506.848c0 265.93-215.574 481.504-481.511 481.504-265.939 0-481.495-215.574-481.495-481.504 0-265.927 215.556-481.512 481.495-481.512 265.937 0 481.511 215.585 481.511 481.512z" fill="url(#b)" />
   <path d="m829.676 506.848c0 178.28-144.53 322.803-322.815 322.803-178.289 0-322.819-144.522-322.819-322.803 0-178.289 144.53-322.816 322.819-322.816 178.285 0 322.815 144.528 322.815 322.816z" fill="url(#c)" />
   <polygon points="519.79 175.308 553.324 86.431 553.324 175.308 578.792 175.308 578.792 48.021 540.518 48.021 505.704 139.157 506.035 139.157 471.223 48.021 432.947 48.021 432.947 175.308 458.416 175.308 458.416 86.431 491.949 175.308" />
   <polygon points="869.313 232.384 825.798 295.831 894.146 262.216 912.684 284.447 805.115 338.459 783.379 312.144 825.077 249.275 824.83 248.965 755.473 278.651 733.489 252.513 806.021 156.469 824.563 178.712 779.146 239.871 849.433 208.522" />
   <path d="m281.427 208.068c-10.251-9.951-26.069-12.951-40.939-3.733 2.847-7.363 1.691-14.858.186-19.015-6.414-11.662-8.662-13.137-13.899-17.561-17.097-14.324-35.082-2.093-47.93 13.219l-62.116 74.028 97.651 81.925 65.5-78.047c14.971-17.838 17.282-35.523 1.547-50.816zm-126.321 35.7l37.311-44.464c4.33-5.146 14.106-4.94 20.375.341 6.908 5.795 6.928 14.002 2.289 19.54l-36.896 43.95zm102.934 7.393l-38.896 46.353-24.355-20.47 39.185-46.711c4.434-5.281 14.313-6.817 20.974-1.229 7.505 6.312 8.247 15.912 3.092 22.057z" fill="#333" />
   <polygon fill="url(#e)" points="520.06 170.39 553.592 81.515 553.592 170.39 579.063 170.39 579.063 43.103 540.784 43.103 505.973 134.236 506.303 134.236 471.491 43.103 433.212 43.103 433.212 170.39 458.683 170.39 458.683 81.515 492.218 170.39" />
   <polygon fill="url(#f)" points="869.563 223.844 826.067 287.293 894.413 253.667 912.934 275.909 805.38 329.921 783.645 303.596 825.345 240.735 825.1 240.416 755.72 270.114 733.759 243.963 806.291 147.93 824.83 170.164 779.419 231.322 849.68 199.985" />
   <path d="m276.868 205.563c-10.23-9.951-26.069-12.953-40.916-3.743 2.824-7.364 1.67-14.86.166-18.996-6.415-11.682-8.642-13.137-13.923-17.57-17.096-14.333-35.059-2.095-47.887 13.231l-62.139 74.016 97.653 81.926 65.499-78.059c14.953-17.839 17.282-35.512 1.547-50.805zm-126.317 35.698l37.307-44.453c4.312-5.155 14.086-4.949 20.376.319 6.909 5.806 6.93 14.023 2.268 19.54l-36.873 43.959zm102.952 7.393l-38.896 46.352-24.398-20.47 39.207-46.721c4.433-5.269 14.291-6.806 20.953-1.216 7.547 6.32 8.29 15.9 3.134 22.055z" fill="url(#g)" />
   <path d="m194.788 506.852c0-172.358 139.724-312.082 312.073-312.082 172.367 0 312.072 139.724 312.072 312.082 0 172.351-139.705 312.071-312.072 312.071-172.35 0-312.073-139.72-312.073-312.071z" fill="url(#i)" />
   <path d="m203.759 506.852c0-167.399 135.702-303.112 303.102-303.112s303.12 135.712 303.12 303.112c0 167.401-135.721 303.113-303.12 303.113s-303.102-135.712-303.102-303.113z" fill="url(#j)" />
   <path d="m203.284 506.852h303.576v-303.575c-167.669 0-303.576 135.908-303.576 303.575z" fill="url(#l)" />
   <path d="m506.86 506.852v303.579c167.667 0 303.576-135.933 303.576-303.579z" fill="url(#m)" />
   <polygon fill="url(#n)" points="812.95 501.458 512.242 501.458 512.242 200.75 501.476 200.75 501.476 501.458 200.768 501.458 200.768 512.225 501.476 512.225 501.476 812.942 512.242 812.942 512.242 512.225 812.95 512.225" />
   <path d="m512.242 209.267c160.141 2.848 289.366 132.062 292.232 292.191h5.36c-2.863-163.099-134.482-294.736-297.593-297.583v5.392z" fill="url(#p)" />
   <path d="m208.729 501.418c2.845-160.347 132.256-289.747 292.604-292.604v-5.383c-163.336 2.856-295.12 134.669-297.987 297.986h5.383z" fill="#c2d7e8" />
   <path d="m501.476 804.433c-160.139-2.844-289.364-132.069-292.211-292.208h-5.381c2.866 163.108 134.484 294.75 297.593 297.594v-5.386z" fill="url(#q)" />
   <path d="m804.475 512.225c-2.866 160.139-132.092 289.364-292.232 292.208v5.386c163.11-2.844 294.747-134.485 297.593-297.594z" fill="#12404f" />
   <polygon fill="url(#r)" points="495.724 203.432 495.724 495.551 203.614 495.551 203.614 501.315 495.724 501.315 501.476 501.315 501.476 495.551 501.476 203.432" />
   <polygon fill="url(#s)" points="495.229 806.995 495.229 518.391 206.029 518.391 206.029 512.7 495.229 512.7 500.92 512.7 500.92 518.391 500.92 806.995" />
   <polygon fill="url(#t)" points="518.409 806.995 518.409 518.391 807.011 518.391 807.011 512.7 518.409 512.7 512.737 512.7 512.737 518.391 512.737 806.995" />
   <polygon fill="url(#u)" points="518.409 206.011 518.409 494.613 807.011 494.613 807.011 500.295 518.409 500.295 512.737 500.295 512.737 494.613 512.737 206.011" />
`}),z0=q({meta:{src:"/_astro/epam-logo.DF57AkML.svg",width:544,height:200,format:"svg"},attributes:{id:"Layer_1","xmlns:x":"ns_extend;","xmlns:i":"ns_ai;","xmlns:graph":"ns_graphs;",x:"0px",y:"0px",viewBox:"0 0 544.1 199.8",style:"enable-background:new 0 0 544.1 199.8;","xml:space":"preserve"},children:`
 <style type="text/css">
  .st0{display:none;}
	.st1{display:inline;}
	.st2{fill:none;stroke:#B2B2B2;stroke-width:0.25;stroke-miterlimit:10;}
	.st3{fill:none;stroke:#B2B2B2;stroke-width:0.25;stroke-miterlimit:10;stroke-dasharray:0.9969,0.9969;}
	.st4{display:inline;fill:none;stroke:#B2B2B2;stroke-width:0.25;stroke-miterlimit:10;stroke-dasharray:1,1;}
	.st5{fill:none;stroke:#B2B2B2;stroke-width:0.25;stroke-miterlimit:10;stroke-dasharray:0.993,0.993;}
	.st6{fill:none;stroke:#B2B2B2;stroke-width:0.25;stroke-miterlimit:10;stroke-dasharray:1.0017,1.0017;}
	.st7{fill:none;stroke:#B2B2B2;stroke-width:0.25;stroke-miterlimit:10;stroke-dasharray:0.9926,0.9926;}
	.st8{display:inline;fill:none;stroke:#E71D73;stroke-width:0.25;stroke-miterlimit:10;}
	.st9{fill:#9D9D9C;}
	.st10{fill:#424241;}
	.st11{display:inline;fill:#00ABCD;}
	.st12{display:inline;fill:#4D4949;}
	.st13{fill:#464547;}
	.st14{fill:#00ABCD;}
 </style>
 <metadata>
  <sfw xmlns="ns_sfw;">
   <slices>
   </slices>
   <sliceSourceBounds bottomLeftOrigin="true" height="547.7" width="544.1" x="22" y="-345">
   </sliceSourceBounds>
  </sfw>
 </metadata>
 <g id="Grid_x2F_Specs" class="st0">
  <g class="st1">
   <g>
    <line class="st2" x1="222.5" y1="249.2" x2="223" y2="249.2">
    </line>
    <line class="st3" x1="224" y1="249.2" x2="524.5" y2="249.2">
    </line>
    <line class="st2" x1="525" y1="249.2" x2="525.5" y2="249.2">
    </line>
   </g>
  </g>
  <line class="st4" x1="222.5" y1="318.4" x2="525.5" y2="318.4">
  </line>
  <line class="st4" x1="222.5" y1="283.9" x2="525.5" y2="283.9">
  </line>
  <g class="st1">
   <g>
    <line class="st2" x1="273.9" y1="223.9" x2="273.9" y2="224.4">
    </line>
    <line class="st5" x1="273.9" y1="225.4" x2="273.9" y2="342.1">
    </line>
    <line class="st2" x1="273.9" y1="342.6" x2="273.9" y2="343.1">
    </line>
   </g>
  </g>
  <g class="st1">
   <g>
    <line class="st2" x1="248.9" y1="223.9" x2="248.9" y2="224.4">
    </line>
    <line class="st5" x1="248.9" y1="225.4" x2="248.9" y2="342.1">
    </line>
    <line class="st2" x1="248.9" y1="342.6" x2="248.9" y2="343.1">
    </line>
   </g>
  </g>
  <line class="st4" x1="499.2" y1="223.9" x2="499.2" y2="343.1">
  </line>
  <g class="st1">
   <g>
    <line class="st2" x1="286.4" y1="223.9" x2="286.4" y2="224.4">
    </line>
    <line class="st5" x1="286.4" y1="225.4" x2="286.4" y2="342.1">
    </line>
    <line class="st2" x1="286.4" y1="342.6" x2="286.4" y2="343.1">
    </line>
   </g>
  </g>
  <line class="st4" x1="461.8" y1="223.9" x2="461.8" y2="343.1">
  </line>
  <line class="st4" x1="474.2" y1="223.9" x2="474.2" y2="343.1">
  </line>
  <g class="st1">
   <g>
    <polyline class="st2" points="524.2,342.6 524.2,343.1 523.7,343.1 			">
    </polyline>
    <line class="st6" x1="522.7" y1="343.1" x2="224.7" y2="343.1">
    </line>
    <polyline class="st2" points="224.2,343.1 223.7,343.1 223.7,342.6 			">
    </polyline>
    <line class="st7" x1="223.7" y1="341.6" x2="223.7" y2="225">
    </line>
    <polyline class="st2" points="223.7,224.5 223.7,224 224.2,224 			">
    </polyline>
    <line class="st6" x1="225.2" y1="224" x2="523.2" y2="224">
    </line>
    <polyline class="st2" points="523.7,224 524.2,224 524.2,224.5 			">
    </polyline>
    <line class="st7" x1="524.2" y1="225.5" x2="524.2" y2="342.1">
    </line>
   </g>
  </g>
  <line class="st8" x1="248.7" y1="357.9" x2="273.9" y2="357.9">
  </line>
  <line class="st8" x1="248.9" y1="288.8" x2="248.9" y2="357.9">
  </line>
  <line class="st8" x1="273.9" y1="312.1" x2="273.9" y2="357.9">
  </line>
  <g class="st1">
   <path d="M259.6,363.7l1.3-1.8l-1.2-1.7h0.5l0.6,0.9c0.1,0.2,0.2,0.3,0.3,0.4c0.1-0.1,0.2-0.3,0.3-0.4l0.7-0.9h0.5l-1.2,1.6
			l1.3,1.8h-0.6l-0.9-1.2c0-0.1-0.1-0.1-0.2-0.2c-0.1,0.1-0.1,0.2-0.2,0.3l-0.9,1.2L259.6,363.7L259.6,363.7z">
   </path>
  </g>
  <g class="st1">
   <path d="M350.8,542h-0.4v-2.7c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.2-0.4,0.2v-0.4c0.2-0.1,0.4-0.2,0.6-0.4s0.3-0.3,0.4-0.5
			h0.3v3.5L350.8,542L350.8,542z">
   </path>
   <path d="M354.1,539.4h-0.4c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.2-0.4-0.2s-0.3,0-0.4,0.1s-0.2,0.2-0.3,0.4
			c-0.1,0.2-0.1,0.5-0.1,0.8c0.1-0.2,0.2-0.3,0.4-0.3c0.1-0.1,0.3-0.1,0.5-0.1c0.3,0,0.5,0.1,0.7,0.3s0.3,0.5,0.3,0.8
			c0,0.2,0,0.4-0.1,0.6s-0.2,0.3-0.4,0.4s-0.4,0.1-0.6,0.1c-0.4,0-0.6-0.1-0.9-0.4c-0.2-0.3-0.3-0.7-0.3-1.3c0-0.7,0.1-1.2,0.4-1.5
			c0.2-0.3,0.5-0.4,0.9-0.4c0.3,0,0.5,0.1,0.7,0.2C354,538.9,354.1,539.1,354.1,539.4z M352.3,540.9c0,0.1,0,0.3,0.1,0.4
			s0.1,0.2,0.3,0.3s0.2,0.1,0.4,0.1c0.2,0,0.3-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.1-0.3-0.2-0.5-0.2
			s-0.4,0.1-0.5,0.2C352.4,540.5,352.3,540.6,352.3,540.9z">
   </path>
   <path d="M354.7,542v-2.5h0.4v0.4c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.3-0.1,0.4-0.1c0.2,0,0.3,0,0.5,0.1c0.1,0.1,0.2,0.2,0.3,0.3
			c0.2-0.3,0.5-0.4,0.8-0.4c0.2,0,0.4,0.1,0.6,0.2c0.1,0.1,0.2,0.4,0.2,0.6v1.7h-0.4v-1.6c0-0.2,0-0.3,0-0.4c0-0.1-0.1-0.1-0.2-0.2
			s-0.2-0.1-0.3-0.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.6v1.5h-0.4v-1.6c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.1-0.3-0.1
			c-0.1,0-0.2,0-0.3,0.1s-0.2,0.2-0.2,0.3s-0.1,0.3-0.1,0.5v1.3L354.7,542L354.7,542z">
   </path>
   <path d="M358.7,542v-2.5h0.4v0.4c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.3-0.1,0.4-0.1c0.2,0,0.3,0,0.5,0.1c0.1,0.1,0.2,0.2,0.3,0.3
			c0.2-0.3,0.5-0.4,0.8-0.4c0.2,0,0.4,0.1,0.6,0.2c0.1,0.1,0.2,0.4,0.2,0.6v1.7h-0.4v-1.6c0-0.2,0-0.3,0-0.4c0-0.1-0.1-0.1-0.2-0.2
			s-0.2-0.1-0.3-0.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.6v1.5h-0.4v-1.6c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.1-0.3-0.1
			c-0.1,0-0.2,0-0.3,0.1s-0.2,0.2-0.2,0.3s-0.1,0.3-0.1,0.5v1.3L358.7,542L358.7,542z">
   </path>
   <path d="M364,540.7c0-0.5,0.1-0.8,0.4-1c0.2-0.2,0.5-0.3,0.8-0.3s0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3,0,0.6-0.1,0.8
			s-0.2,0.3-0.4,0.4c-0.2,0.1-0.4,0.2-0.6,0.2c-0.4,0-0.6-0.1-0.9-0.3C364.1,541.5,364,541.2,364,540.7z M364.4,540.7
			c0,0.3,0.1,0.6,0.2,0.7c0.1,0.2,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.4,0.2-0.7s-0.1-0.5-0.2-0.7s-0.3-0.2-0.5-0.2
			s-0.4,0.1-0.5,0.2C364.5,540.2,364.4,540.4,364.4,540.7z">
   </path>
   <path d="M366.8,542v-2.5h0.4v0.4c0.1-0.2,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.3,0,0.4,0.1l-0.1,0.4
			c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0.2-0.1,0.3-0.1,0.5v1.3L366.8,542L366.8,542z">
   </path>
   <path d="M371.3,542h-0.4v-2.7c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.2-0.4,0.2v-0.4c0.2-0.1,0.4-0.2,0.6-0.4s0.3-0.3,0.4-0.5
			h0.3v3.5L371.3,542L371.3,542z">
   </path>
   <path d="M372.4,540.3c0-0.4,0-0.7,0.1-1c0.1-0.2,0.2-0.4,0.4-0.6s0.4-0.2,0.6-0.2s0.4,0,0.5,0.1s0.3,0.2,0.3,0.3
			c0.1,0.1,0.2,0.3,0.2,0.5c0.1,0.2,0.1,0.5,0.1,0.8c0,0.4,0,0.7-0.1,1s-0.2,0.4-0.4,0.6c-0.2,0.1-0.4,0.2-0.6,0.2
			c-0.3,0-0.6-0.1-0.8-0.4C372.5,541.4,372.4,540.9,372.4,540.3z M372.8,540.3c0,0.6,0.1,1,0.2,1.1c0.1,0.2,0.3,0.3,0.5,0.3
			s0.4-0.1,0.5-0.3s0.2-0.6,0.2-1.1c0-0.6-0.1-1-0.2-1.1c-0.1-0.2-0.3-0.3-0.5-0.3s-0.4,0.1-0.5,0.2
			C372.9,539.3,372.8,539.7,372.8,540.3z">
   </path>
   <path d="M375.1,540.3c0-0.4,0-0.7,0.1-1c0.1-0.2,0.2-0.4,0.4-0.6s0.4-0.2,0.6-0.2s0.4,0,0.5,0.1s0.3,0.2,0.3,0.3
			c0.1,0.1,0.2,0.3,0.2,0.5c0.1,0.2,0.1,0.5,0.1,0.8c0,0.4,0,0.7-0.1,1s-0.2,0.4-0.4,0.6c-0.2,0.1-0.4,0.2-0.6,0.2
			c-0.3,0-0.6-0.1-0.8-0.4C375.2,541.4,375.1,540.9,375.1,540.3z M375.5,540.3c0,0.6,0.1,1,0.2,1.1c0.1,0.2,0.3,0.3,0.5,0.3
			s0.4-0.1,0.5-0.3s0.2-0.6,0.2-1.1c0-0.6-0.1-1-0.2-1.1c-0.1-0.2-0.3-0.3-0.5-0.3s-0.4,0.1-0.5,0.2
			C375.6,539.3,375.5,539.7,375.5,540.3z">
   </path>
   <path d="M379.3,543v-3.5h0.4v0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.3-0.1,0.4-0.1c0.2,0,0.4,0.1,0.6,0.2c0.2,0.1,0.3,0.3,0.4,0.5
			s0.1,0.4,0.1,0.7s0,0.5-0.1,0.7s-0.2,0.4-0.4,0.5c-0.2,0.1-0.4,0.2-0.6,0.2c-0.1,0-0.3,0-0.4-0.1s-0.2-0.1-0.3-0.2v1.2h-0.4V543z
			 M379.7,540.8c0,0.3,0.1,0.6,0.2,0.7c0.1,0.2,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.4,0.2-0.7s-0.1-0.6-0.2-0.7
			c-0.1-0.2-0.3-0.2-0.5-0.2s-0.3,0.1-0.5,0.3C379.7,540.2,379.7,540.4,379.7,540.8z">
   </path>
   <path d="M382,539v-0.5h0.4v0.5H382z M382,542v-2.5h0.4v2.5H382z">
   </path>
   <path d="M382.8,542l0.9-1.3l-0.9-1.2h0.5l0.4,0.6c0.1,0.1,0.1,0.2,0.2,0.3c0.1-0.1,0.1-0.2,0.2-0.3l0.4-0.6h0.5l-0.9,1.2l0.9,1.3
			h-0.5l-0.5-0.8V541l-0.7,1H382.8z">
   </path>
   <path d="M387.2,541.2l0.4,0.1c-0.1,0.3-0.2,0.5-0.4,0.6c-0.2,0.1-0.4,0.2-0.7,0.2c-0.4,0-0.7-0.1-0.9-0.3c-0.2-0.2-0.3-0.5-0.3-1
			c0-0.4,0.1-0.8,0.3-1s0.5-0.4,0.8-0.4s0.6,0.1,0.8,0.3s0.3,0.6,0.3,1v0.1h-1.9c0,0.3,0.1,0.5,0.2,0.6s0.3,0.2,0.5,0.2
			s0.3,0,0.4-0.1C387.1,541.5,387.2,541.4,387.2,541.2z M385.8,540.5h1.4c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.2-0.3-0.2-0.5-0.2
			s-0.4,0.1-0.5,0.2C385.9,540.1,385.8,540.3,385.8,540.5z">
   </path>
   <path d="M388.2,542v-3.5h0.4v3.5H388.2z">
   </path>
   <path d="M389.1,541.2l0.4-0.1c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.1,0.5,0.1s0.3,0,0.4-0.1s0.1-0.2,0.1-0.3s0-0.2-0.1-0.2
			s-0.2-0.1-0.4-0.1c-0.3-0.1-0.5-0.1-0.7-0.2s-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.2-0.1-0.3s0-0.2,0.1-0.3s0.1-0.2,0.2-0.2
			s0.2-0.1,0.3-0.1c0.1,0,0.2-0.1,0.4-0.1c0.2,0,0.4,0,0.5,0.1s0.3,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0.1,0.4l-0.4,0.1
			c0-0.1-0.1-0.2-0.2-0.3s-0.2-0.1-0.4-0.1c-0.2,0-0.3,0-0.4,0.1s-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0.1,0.1c0,0,0.1,0.1,0.2,0.1
			c0,0,0.2,0.1,0.4,0.1c0.3,0.1,0.5,0.1,0.6,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0.1,0.4c0,0.1,0,0.3-0.1,0.4
			c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.5,0.1c-0.3,0-0.6-0.1-0.7-0.2C389.3,541.7,389.2,541.5,389.1,541.2z">
   </path>
  </g>
  <g class="st1">
   <path class="st9" d="M355.8,535v-4.3h0.8l0.6,3.3l0.6-3.3h0.8v4.3H358v-3.4l-0.6,3.4h-0.5l-0.6-3.4v3.4H355.8z">
   </path>
   <path class="st9" d="M359.5,535v-4.3h0.6v4.3H359.5z">
   </path>
   <path class="st9" d="M360.9,535v-4.3h0.5l1.1,2.6v-2.6h0.6v4.3h-0.4l-1.1-2.8v2.8H360.9z">
   </path>
   <path class="st9" d="M363.7,535v-4.3h0.6v4.3H363.7z">
   </path>
   <path class="st9" d="M365.1,535v-4.3h0.8l0.6,3.3l0.6-3.3h0.8v4.3h-0.6v-3.4l-0.6,3.4h-0.5l-0.6-3.4v3.4H365.1z">
   </path>
   <path class="st9" d="M370.4,534.9c-0.1,0-0.3,0.1-0.5,0.1s-0.3,0-0.5-0.1c-0.1,0-0.3-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.3
			c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.2,0-0.3,0-0.5v-2.7h0.6v2.7c0,0.1,0,0.2,0,0.3s0,0.2,0,0.3s0.1,0.2,0.1,0.2c0,0.1,0.1,0.1,0.2,0.2
			c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.3-0.1c0.1,0,0.1-0.1,0.2-0.2c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0-0.2,0-0.3s0-0.2,0-0.3v-2.7h0.6
			v2.7c0,0.2,0,0.4,0,0.5c0,0.2-0.1,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.3C370.7,534.8,370.6,534.9,370.4,534.9z">
   </path>
   <path class="st9" d="M371.8,535v-4.3h0.8l0.6,3.3l0.6-3.3h0.8v4.3H374v-3.4l-0.6,3.4H373l-0.6-3.4v3.4H371.8z">
   </path>
   <path class="st9" d="M377.7,535c-0.4,0-0.7-0.1-0.9-0.3c-0.2-0.2-0.3-0.5-0.3-0.9l0.6-0.2c0,0.6,0.2,0.9,0.6,0.9
			c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.2,0-0.3s-0.1-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.2-0.1l-0.8-0.6
			c-0.1-0.1-0.2-0.2-0.3-0.4s-0.1-0.4-0.1-0.6c0-0.3,0.1-0.6,0.3-0.7c0.2-0.2,0.5-0.3,0.8-0.3s0.6,0.1,0.8,0.3
			c0.2,0.2,0.3,0.4,0.4,0.7v0.1l-0.6,0.2v-0.1c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.2-0.2-0.4-0.2c-0.1,0-0.3,0-0.3,0.1
			c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.2,0.1,0.4,0.3,0.6l0.8,0.6c0.4,0.3,0.6,0.7,0.6,1.2c0,0.3-0.1,0.6-0.3,0.7S378,535,377.7,535z">
   </path>
   <path class="st9" d="M379.3,535v-4.3h0.6v4.3H379.3z">
   </path>
   <path class="st9" d="M380.5,535v-0.5l1.4-3.3h-1.2v-0.5h1.8v0.5l-1.4,3.3h1.4v0.5H380.5z">
   </path>
   <path class="st9" d="M383.1,535v-4.3h1.7v0.5h-1.1v1.4h0.8v0.5h-0.8v1.5h1.1v0.5h-1.7V535z">
   </path>
  </g>
  <line class="st8" x1="223.7" y1="236.1" x2="248.9" y2="236.1">
  </line>
  <line class="st8" x1="223.7" y1="231.8" x2="223.7" y2="240.4">
  </line>
  <line class="st8" x1="248.9" y1="231.8" x2="248.9" y2="240.4">
  </line>
  <line class="st8" x1="511.9" y1="249.3" x2="511.9" y2="224">
  </line>
  <line class="st8" x1="507.5" y1="249.2" x2="516.2" y2="249.2">
  </line>
  <line class="st8" x1="507.5" y1="224" x2="516.2" y2="224">
  </line>
  <line class="st8" x1="273.9" y1="236.1" x2="286.4" y2="236.1">
  </line>
  <line class="st8" x1="273.9" y1="231.8" x2="273.9" y2="240.4">
  </line>
  <line class="st8" x1="286.4" y1="231.8" x2="286.4" y2="240.4">
  </line>
  <g class="st1">
   <path d="M276.6,232.3V231c-0.2,0.1-0.3,0.2-0.5,0.3V231c0.1,0,0.2-0.1,0.3-0.2s0.2-0.2,0.3-0.3h0.3v1.8H276.6z M276.3,234.2
			l2.6-3.7h0.4l-2.6,3.7H276.3z M278.3,234.1c0-0.1,0-0.2,0.1-0.3s0.3-0.3,0.5-0.5s0.4-0.3,0.4-0.3c0.1-0.1,0.1-0.1,0.1-0.2
			c0-0.1,0-0.1-0.1-0.2c-0.1,0-0.1-0.1-0.2-0.1s-0.2,0-0.2,0.1c-0.1,0-0.1,0.1-0.1,0.2h-0.4c0-0.2,0.1-0.3,0.2-0.4
			c0.1-0.1,0.3-0.1,0.5-0.1s0.4,0,0.5,0.1s0.2,0.2,0.2,0.3s0,0.3-0.1,0.4c-0.1,0.1-0.2,0.2-0.5,0.4c-0.1,0.1-0.2,0.2-0.3,0.2h0.9
			v0.3h-1.5V234.1z">
   </path>
   <path d="M281.3,234.1l1.3-1.8l-1.2-1.7h0.5l0.6,0.9c0.1,0.2,0.2,0.3,0.3,0.4c0.1-0.1,0.2-0.3,0.3-0.4l0.7-0.9h0.5l-1.2,1.6
			l1.3,1.8h-0.6l-0.9-1.2c0-0.1-0.1-0.1-0.2-0.2c-0.1,0.1-0.1,0.2-0.2,0.3l-0.9,1.2L281.3,234.1L281.3,234.1z">
   </path>
  </g>
  <g class="st1">
   <path d="M234.7,234.1l1.3-1.8l-1.2-1.7h0.5l0.6,0.9c0.1,0.2,0.2,0.3,0.3,0.4c0.1-0.1,0.2-0.3,0.3-0.4l0.7-0.9h0.5l-1.2,1.6
			l1.3,1.8h-0.6l-0.9-1.2c0-0.1-0.1-0.1-0.2-0.2c-0.1,0.1-0.1,0.2-0.2,0.3l-0.9,1.2L234.7,234.1L234.7,234.1z">
   </path>
  </g>
  <line class="st8" x1="320.2" y1="521.4" x2="420.2" y2="521.4">
  </line>
  <line class="st8" x1="320.2" y1="517" x2="320.2" y2="525.7">
  </line>
  <line class="st8" x1="420.2" y1="517" x2="420.2" y2="525.7">
  </line>
  <g class="st1">
   <path d="M505.9,238.8l1.3-1.8l-1.2-1.7h0.5l0.6,0.9c0.1,0.2,0.2,0.3,0.3,0.4c0.1-0.1,0.2-0.3,0.3-0.4l0.7-0.9h0.5l-1.2,1.6
			l1.3,1.8h-0.6l-0.9-1.2c0-0.1-0.1-0.1-0.2-0.2c-0.1,0.1-0.1,0.2-0.2,0.3l-0.9,1.2L505.9,238.8L505.9,238.8z">
   </path>
  </g>
  <g class="st1">
   <g>
    <path class="st10" d="M47.6,498.8l0.8-1c0.5,0.4,1.1,0.7,1.6,0.7c0.6,0,0.9-0.2,0.9-0.6s-0.4-0.5-0.9-0.8l-0.8-0.4
				c-0.7-0.3-1.3-0.8-1.3-1.8c0-1.1,1-1.9,2.3-1.9c0.7,0,1.5,0.3,2.1,0.9l-0.7,0.9c-0.4-0.3-0.8-0.5-1.3-0.5s-0.8,0.2-0.8,0.6
				s0.4,0.5,1,0.8l0.8,0.3c0.8,0.3,1.3,0.8,1.3,1.8c0,1.1-0.9,2-2.5,2C49.2,499.7,48.3,499.4,47.6,498.8z">
    </path>
    <path class="st10" d="M53.5,492.6H55v1.7l-0.1,0.9c0.4-0.3,0.9-0.7,1.5-0.7c1.1,0,1.5,0.8,1.5,2v3.1h-1.5v-2.9
				c0-0.7-0.2-0.9-0.6-0.9s-0.6,0.2-0.9,0.5v3.3h-1.5L53.5,492.6L53.5,492.6z">
    </path>
    <path class="st10" d="M58.9,498.2c0-1,0.8-1.6,2.8-1.8c0-0.4-0.2-0.7-0.8-0.7c-0.4,0-0.8,0.2-1.3,0.5l-0.5-1
				c0.6-0.4,1.3-0.6,2.1-0.6c1.3,0,2,0.7,2,2.2v2.8H62l-0.1-0.5l0,0c-0.4,0.4-0.9,0.6-1.4,0.6C59.5,499.7,58.9,499,58.9,498.2z
				 M61.7,498.1v-0.9c-1,0.1-1.4,0.4-1.4,0.8c0,0.3,0.2,0.5,0.6,0.5C61.3,498.6,61.5,498.4,61.7,498.1z">
    </path>
    <path class="st10" d="M64.4,494.6h1.2l0.1,0.9l0,0c0.4-0.7,0.9-1,1.4-1c0.3,0,0.4,0,0.6,0.1l-0.2,1.3c-0.2,0-0.3-0.1-0.5-0.1
				c-0.4,0-0.8,0.2-1.1,0.9v2.9h-1.5V494.6z">
    </path>
    <path class="st10" d="M68.4,494.6h1.2l0.1,0.5l0,0c0.4-0.3,0.9-0.6,1.4-0.6c1.2,0,1.9,1,1.9,2.5c0,1.7-1,2.7-2.1,2.7
				c-0.4,0-0.8-0.2-1.2-0.5v0.8v1.4h-1.5v-6.8H68.4z M71.6,497c0-0.9-0.3-1.3-0.9-1.3c-0.3,0-0.6,0.1-0.8,0.5v2
				c0.3,0.2,0.5,0.3,0.8,0.3C71.2,498.5,71.6,498.1,71.6,497z">
    </path>
    <path class="st10" d="M76.3,493.1h2.2c1.3,0,2.4,0.4,2.4,1.6c0,0.6-0.3,1.2-0.8,1.4l0,0c0.7,0.2,1.2,0.7,1.2,1.5
				c0,1.3-1.1,1.9-2.5,1.9h-2.4L76.3,493.1L76.3,493.1z M78.4,495.7c0.7,0,1-0.3,1-0.8s-0.3-0.7-1-0.7h-0.7v1.5H78.4z M78.6,498.4
				c0.8,0,1.2-0.3,1.2-0.9s-0.4-0.8-1.2-0.8h-0.8v1.7L78.6,498.4L78.6,498.4z">
    </path>
    <path class="st10" d="M82.2,498v-5.5h1.5v5.5c0,0.3,0.1,0.4,0.3,0.4c0.1,0,0.1,0,0.2,0l0.2,1.1c-0.2,0.1-0.4,0.1-0.7,0.1
				C82.5,499.7,82.2,499,82.2,498z">
    </path>
    <path class="st10" d="M85,497.7v-3.1h1.5v2.9c0,0.7,0.2,0.9,0.6,0.9s0.6-0.2,0.9-0.5v-3.3h1.5v5h-1.2l-0.1-0.7l0,0
				c-0.4,0.5-0.9,0.8-1.6,0.8C85.5,499.7,85,498.9,85,497.7z">
    </path>
    <path class="st10" d="M90.5,497.1c0-1.6,1.1-2.6,2.3-2.6c1.4,0,2.1,1,2.1,2.4c0,0.3,0,0.5-0.1,0.6h-3c0.1,0.7,0.6,1,1.3,1
				c0.4,0,0.7-0.1,1.1-0.3l0.5,0.9c-0.5,0.3-1.2,0.6-1.8,0.6C91.5,499.7,90.5,498.7,90.5,497.1z M93.7,496.6c0-0.5-0.2-0.9-0.8-0.9
				c-0.5,0-0.9,0.3-1,0.9H93.7z">
    </path>
   </g>
   <g>
    <path class="st10" d="M48.2,505H49v2.7h3V505h0.8v6.6H52v-3.1h-3v3.1h-0.8V505z">
    </path>
    <path class="st10" d="M54.2,509.2c0-1.6,1.1-2.6,2.2-2.6c1.2,0,1.9,0.9,1.9,2.3c0,0.2,0,0.3,0,0.5H55c0.1,1,0.7,1.7,1.6,1.7
				c0.5,0,0.8-0.1,1.2-0.4l0.3,0.5c-0.4,0.3-0.9,0.5-1.6,0.5C55.3,511.7,54.2,510.7,54.2,509.2z M57.6,508.8c0-1-0.4-1.5-1.2-1.5
				c-0.7,0-1.3,0.5-1.4,1.5H57.6z">
    </path>
    <path class="st10" d="M60.4,509l-1.5-2.3h0.9l0.6,1.1c0.1,0.3,0.3,0.5,0.5,0.8l0,0c0.1-0.3,0.3-0.5,0.4-0.8l0.6-1.1h0.9l-1.5,2.4
				l1.6,2.4H62l-0.7-1.1c-0.2-0.3-0.4-0.6-0.5-0.9l0,0c-0.2,0.3-0.3,0.6-0.5,0.9l-0.7,1.1h-0.9L60.4,509z">
    </path>
    <path class="st10" d="M63.8,507.5c0-0.4,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6
				C64.1,508.1,63.8,507.8,63.8,507.5z M63.8,511.1c0-0.4,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6
				C64.1,511.7,63.8,511.4,63.8,511.1z">
    </path>
    <path class="st10" d="M68.8,509.5H68V509h0.9l0.2-1.5h-0.8v-0.6h0.9l0.2-1.8h0.5l-0.2,1.8H71l0.2-1.8h0.5l-0.2,1.8h0.8v0.6h-0.9
				l-0.2,1.5H72v0.6h-0.9l-0.2,2h-0.5l0.2-2h-1.3l-0.2,2h-0.5L68.8,509.5z M70.7,509l0.2-1.5h-1.3l-0.2,1.5H70.7z">
    </path>
    <path class="st10" d="M72.9,510.8l0.4-0.5c0.4,0.4,0.9,0.8,1.6,0.8c0.8,0,1.3-0.5,1.3-1.2c0-0.8-0.5-1.3-2-1.3V508
				c1.4,0,1.8-0.5,1.8-1.2c0-0.6-0.4-1-1.1-1c-0.5,0-1,0.3-1.4,0.7l-0.4-0.5c0.5-0.5,1.1-0.8,1.8-0.8c1.1,0,1.9,0.6,1.9,1.6
				c0,0.8-0.5,1.3-1.2,1.5l0,0c0.8,0.2,1.4,0.7,1.4,1.6c0,1.1-0.9,1.8-2.1,1.8C73.9,511.7,73.3,511.3,72.9,510.8z">
    </path>
    <path class="st10" d="M78.5,510.5c0.3,0.3,0.6,0.5,1,0.5c0.9,0,1.7-0.7,1.7-2.7c-0.4,0.5-1,0.8-1.5,0.8c-1.1,0-1.8-0.7-1.8-2
				c0-1.2,0.9-2,1.9-2c1.3,0,2.2,1,2.2,3.1c0,2.6-1.2,3.5-2.4,3.5c-0.7,0-1.2-0.3-1.5-0.7L78.5,510.5z M81.2,507.6
				c-0.1-1.2-0.6-1.9-1.4-1.9c-0.6,0-1.1,0.6-1.1,1.4s0.4,1.3,1.2,1.3C80.3,508.5,80.8,508.2,81.2,507.6z">
    </path>
    <path class="st10" d="M83.1,508.3c0-2.1,1.2-3.4,2.9-3.4c0.8,0,1.4,0.4,1.8,0.8l-0.4,0.5c-0.3-0.4-0.8-0.6-1.3-0.6
				c-1.2,0-2.1,1-2.1,2.6s0.8,2.7,2,2.7c0.6,0,1.1-0.3,1.5-0.7l0.5,0.5c-0.5,0.6-1.2,0.9-2,0.9C84.3,511.7,83.1,510.4,83.1,508.3z">
    </path>
    <path class="st10" d="M88.6,511.1c1.9-1.9,3-3.1,3-4.1c0-0.7-0.4-1.2-1.2-1.2c-0.5,0-1,0.3-1.4,0.8l-0.5-0.5c0.5-0.6,1.1-1,1.9-1
				c1.2,0,1.9,0.7,1.9,1.9c0,1.2-1.1,2.4-2.6,4c0.3,0,0.7-0.1,1.1-0.1h1.8v0.7h-4.1L88.6,511.1L88.6,511.1z">
    </path>
    <path class="st10" d="M94.1,505h1.6c2,0,3.1,1.2,3.1,3.2c0,2.1-1.1,3.3-3.1,3.3H94L94.1,505L94.1,505z M95.7,510.9
				c1.5,0,2.3-1,2.3-2.6c0-1.6-0.8-2.6-2.3-2.6H95v5.2H95.7z">
    </path>
    <path class="st10" d="M103,505.9h-3.2v-0.7h4.1v0.5c-1.5,1.9-1.8,3.4-1.9,5.9h-0.8C101.2,509.2,101.7,507.7,103,505.9z">
    </path>
   </g>
   <g>
    <path class="st10" d="M51.8,523.6l-1.6-2.8H49v2.8h-0.8V517h2c1.3,0,2.3,0.5,2.3,1.8c0,1-0.6,1.6-1.5,1.9l1.7,2.9L51.8,523.6
				L51.8,523.6z M49,520.1h1.1c1,0,1.6-0.4,1.6-1.3c0-0.9-0.6-1.2-1.6-1.2H49V520.1z">
    </path>
    <path class="st10" d="M53.5,520.3c0-2.1,1.3-3.4,3-3.4c0.9,0,1.5,0.4,1.9,0.8l-0.5,0.5c-0.3-0.3-0.8-0.6-1.4-0.6
				c-1.3,0-2.2,1-2.2,2.6s0.8,2.7,2.2,2.7c0.5,0,0.9-0.2,1.2-0.4v-1.7h-1.4v-0.7h2.1v2.8c-0.4,0.4-1.1,0.8-2,0.8
				C54.7,523.7,53.5,522.4,53.5,520.3z">
    </path>
    <path class="st10" d="M60,517h2c1.3,0,2.2,0.5,2.2,1.6c0,0.6-0.3,1.2-1,1.4l0,0c0.8,0.2,1.3,0.7,1.3,1.6c0,1.3-1,1.9-2.5,1.9h-2
				V517z M61.8,519.8c1.1,0,1.6-0.4,1.6-1.1c0-0.8-0.5-1-1.5-1h-1v2.1H61.8z M62,522.9c1.1,0,1.8-0.4,1.8-1.3c0-0.8-0.6-1.2-1.8-1.2
				h-1.1v2.5H62z">
    </path>
    <path class="st10" d="M65.6,519.5c0-0.4,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6S65.6,519.8,65.6,519.5z
				 M65.6,523.1c0-0.4,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6C65.9,523.7,65.6,523.4,65.6,523.1z">
    </path>
    <path class="st10" d="M69.7,522.8l0.4-0.5c0.4,0.4,0.9,0.7,1.6,0.7c0.8,0,1.4-0.6,1.4-1.5s-0.5-1.4-1.4-1.4
				c-0.4,0-0.7,0.1-1.1,0.4l-0.4-0.3l0.2-3.1h3.2v0.7h-2.5l-0.2,1.9c0.3-0.2,0.6-0.3,1-0.3c1.1,0,2,0.6,2,2s-1,2.2-2.1,2.2
				C70.8,523.7,70.2,523.3,69.7,522.8z">
    </path>
    <path class="st10" d="M78.1,517.9h-3.2v-0.7H79v0.5c-1.5,1.9-1.8,3.4-1.9,5.9h-0.8C76.3,521.2,76.8,519.7,78.1,517.9z">
    </path>
    <path class="st10" d="M79.9,524.8c0.6-0.2,0.9-0.7,0.9-1.2h-0.1c-0.3,0-0.6-0.2-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6
				c0.4,0,0.7,0.4,0.7,1c0,0.9-0.5,1.5-1.3,1.9L79.9,524.8z">
    </path>
    <path class="st10" d="M84.7,522.9h1.5v-4.7H85v-0.5c0.6-0.1,1-0.3,1.3-0.5h0.6v5.7h1.3v0.7h-3.6L84.7,522.9L84.7,522.9z">
    </path>
    <path class="st10" d="M89.9,522.5c0.3,0.3,0.6,0.5,1,0.5c0.9,0,1.7-0.7,1.7-2.7c-0.4,0.5-1,0.8-1.5,0.8c-1.1,0-1.8-0.7-1.8-2
				c0-1.2,0.9-2,1.9-2c1.3,0,2.2,1,2.2,3.1c0,2.6-1.2,3.5-2.4,3.5c-0.7,0-1.2-0.3-1.5-0.7L89.9,522.5z M92.6,519.6
				c-0.1-1.2-0.6-1.9-1.4-1.9c-0.6,0-1.1,0.6-1.1,1.4c0,0.8,0.4,1.3,1.2,1.3C91.6,520.5,92.1,520.2,92.6,519.6z">
    </path>
    <path class="st10" d="M98.5,521.8h-0.9v1.8h-0.8v-1.8H94v-0.5l2.7-4.1h0.9v4h0.9V521.8z M96.9,521.2v-1.8c0-0.3,0-0.9,0-1.2l0,0
				c-0.2,0.3-0.3,0.6-0.5,0.9l-1.5,2.2h2V521.2z">
    </path>
    <path class="st10" d="M99.3,524.8c0.6-0.2,0.9-0.7,0.9-1.2h-0.1c-0.3,0-0.6-0.2-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6
				c0.4,0,0.7,0.4,0.7,1c0,0.9-0.5,1.5-1.3,1.9L99.3,524.8z">
    </path>
    <path class="st10" d="M103.7,523.1c1.9-1.9,3-3.1,3-4.1c0-0.7-0.4-1.2-1.2-1.2c-0.5,0-1,0.3-1.4,0.8l-0.5-0.5
				c0.5-0.6,1.1-1,1.9-1c1.2,0,1.9,0.7,1.9,1.9s-1.1,2.4-2.6,4c0.3,0,0.7-0.1,1.1-0.1h1.8v0.7h-4.1L103.7,523.1L103.7,523.1z">
    </path>
    <path class="st10" d="M109.1,522.9h1.5v-4.7h-1.2v-0.5c0.6-0.1,1-0.3,1.3-0.5h0.6v5.7h1.3v0.7H109L109.1,522.9L109.1,522.9z">
    </path>
    <path class="st10" d="M113.5,522.8l0.4-0.5c0.4,0.4,0.9,0.7,1.6,0.7c0.8,0,1.4-0.6,1.4-1.5s-0.5-1.4-1.4-1.4
				c-0.4,0-0.7,0.1-1.1,0.4l-0.4-0.3l0.2-3.1h3.2v0.7h-2.5l-0.2,1.9c0.3-0.2,0.6-0.3,1-0.3c1.1,0,2,0.6,2,2s-1,2.2-2.1,2.2
				C114.6,523.7,113.9,523.3,113.5,522.8z">
    </path>
   </g>
   <g>
    <path class="st10" d="M47.8,532.3c0-2.1,1.2-3.4,2.9-3.4c0.8,0,1.4,0.4,1.8,0.8l-0.4,0.5c-0.3-0.4-0.8-0.6-1.3-0.6
				c-1.2,0-2.1,1-2.1,2.6s0.8,2.7,2,2.7c0.6,0,1.1-0.3,1.5-0.7l0.5,0.5c-0.5,0.6-1.2,0.9-2,0.9C49,535.7,47.8,534.4,47.8,532.3z">
    </path>
    <path class="st10" d="M53.9,529h1l1.3,3.5c0.2,0.5,0.3,0.9,0.5,1.4l0,0c0.2-0.4,0.3-0.9,0.4-1.4l1.2-3.5h1v6.6h-0.8V532
				c0-0.6,0.1-1.4,0.1-1.9l0,0l-0.5,1.5l-1.2,3.4h-0.5l-1.2-3.4l-0.5-1.5l0,0c0,0.6,0.1,1.4,0.1,1.9v3.6h-0.7V529H53.9z">
    </path>
    <path class="st10" d="M62.2,533l-2-4h0.9l0.8,1.8c0.2,0.5,0.4,0.9,0.6,1.4l0,0c0.2-0.5,0.5-0.9,0.7-1.4L64,529h1l-2,4v2.5h-0.8
				V533z">
    </path>
    <path class="st10" d="M65.9,529h0.8v3.3l0,0l2.7-3.3h0.9l-2,2.5l2.4,4.1h-0.9l-2-3.4l-1.1,1.3v2.1h-0.8V529z">
    </path>
    <path class="st10" d="M71.4,531.5c0-0.4,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6
				C71.7,532.1,71.4,531.8,71.4,531.5z M71.4,535.1c0-0.4,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6
				C71.7,535.7,71.4,535.4,71.4,535.1z">
    </path>
    <path class="st10" d="M75.7,533.9c0-0.8,0.6-1.4,1.2-1.7l0,0c-0.5-0.3-0.9-0.8-0.9-1.5c0-1,0.8-1.6,1.8-1.6
				c1.1,0,1.8,0.7,1.8,1.7c0,0.7-0.5,1.2-0.9,1.5l0,0c0.6,0.3,1.1,0.8,1.1,1.6c0,0.9-0.8,1.7-2.1,1.7
				C76.6,535.7,75.7,535,75.7,533.9z M79,534c0-0.8-0.8-1.1-1.7-1.5c-0.5,0.3-0.9,0.8-0.9,1.4c0,0.7,0.6,1.2,1.4,1.2
				C78.5,535.1,79,534.6,79,534z M78.9,530.8c0-0.6-0.4-1.1-1.1-1.1c-0.6,0-1,0.4-1,1c0,0.8,0.7,1.1,1.5,1.4
				C78.6,531.7,78.9,531.3,78.9,530.8z">
    </path>
    <path class="st10" d="M84.9,533.8H84v1.8h-0.8v-1.8h-2.9v-0.5l2.7-4.1h0.9v4h0.9v0.6H84.9z M83.3,533.2v-1.8c0-0.3,0-0.9,0.1-1.2
				l0,0c-0.2,0.3-0.3,0.6-0.5,0.9l-1.5,2.2h1.9V533.2z">
    </path>
    <path class="st10" d="M85.7,536.8c0.6-0.2,0.9-0.7,0.9-1.2h-0.1c-0.3,0-0.6-0.2-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6
				c0.4,0,0.7,0.4,0.7,1c0,0.9-0.5,1.5-1.3,1.9L85.7,536.8z">
    </path>
    <path class="st10" d="M90.1,532.4c0-2.1,0.8-3.3,2-3.3c1.3,0,2,1.1,2,3.3s-0.8,3.3-2,3.3S90.1,534.5,90.1,532.4z M93.4,532.4
				c0-1.9-0.5-2.6-1.2-2.6s-1.2,0.8-1.2,2.6s0.5,2.7,1.2,2.7C92.9,535,93.4,534.2,93.4,532.4z">
    </path>
    <path class="st10" d="M95.1,536.8c0.6-0.2,0.9-0.7,0.9-1.2h-0.1c-0.3,0-0.6-0.2-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6
				c0.4,0,0.7,0.4,0.7,1c0,0.9-0.5,1.5-1.3,1.9L95.1,536.8z">
    </path>
    <path class="st10" d="M100,534.9h1.5v-4.7h-1.2v-0.5c0.6-0.1,1-0.3,1.3-0.5h0.6v5.7h1.3v0.7H100V534.9z">
    </path>
    <path class="st10" d="M104.5,533.9c0-0.8,0.6-1.4,1.2-1.7l0,0c-0.5-0.3-0.9-0.8-0.9-1.5c0-1,0.8-1.6,1.8-1.6
				c1.1,0,1.8,0.7,1.8,1.7c0,0.7-0.5,1.2-0.9,1.5l0,0c0.6,0.3,1.1,0.8,1.1,1.6c0,0.9-0.8,1.7-2.1,1.7
				C105.4,535.7,104.5,535,104.5,533.9z M107.9,534c0-0.8-0.8-1.1-1.7-1.5c-0.5,0.3-0.9,0.8-0.9,1.4c0,0.7,0.6,1.2,1.4,1.2
				C107.4,535.1,107.9,534.6,107.9,534z M107.7,530.8c0-0.6-0.4-1.1-1.1-1.1c-0.6,0-1,0.4-1,1c0,0.8,0.7,1.1,1.5,1.4
				C107.5,531.7,107.7,531.3,107.7,530.8z">
    </path>
    <path class="st10" d="M109.6,536.8c0.6-0.2,0.9-0.7,0.9-1.2h-0.1c-0.3,0-0.6-0.2-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6
				c0.4,0,0.7,0.4,0.7,1c0,0.9-0.5,1.5-1.3,1.9L109.6,536.8z">
    </path>
    <path class="st10" d="M114,532.4c0-2.1,0.8-3.3,2-3.3c1.3,0,2,1.1,2,3.3s-0.8,3.3-2,3.3S114,534.5,114,532.4z M117.3,532.4
				c0-1.9-0.5-2.6-1.2-2.6s-1.2,0.8-1.2,2.6s0.5,2.7,1.2,2.7C116.8,535,117.3,534.2,117.3,532.4z">
    </path>
   </g>
   <g>
    <path class="st10" d="M48.2,541H50c1.5,0,2.5,0.5,2.5,1.9s-1,2-2.4,2H49v2.6h-0.8V541z M50,544.3c1.1,0,1.7-0.4,1.7-1.3
				c0-0.9-0.6-1.3-1.7-1.3h-1v2.6H50z">
    </path>
    <path class="st10" d="M53.8,541h1l1.3,3.5c0.2,0.5,0.3,0.9,0.5,1.4l0,0c0.2-0.4,0.3-0.9,0.4-1.4l1.2-3.5h1v6.6h-0.8V544
				c0-0.6,0.1-1.4,0.1-1.9l0,0l-0.5,1.5l-1.2,3.4h-0.5l-1.2-3.4l-0.5-1.5l0,0c0,0.6,0.1,1.4,0.1,1.9v3.6H54V541H53.8z">
    </path>
    <path class="st10" d="M60.6,546.7l0.5-0.6c0.5,0.5,1.1,0.8,1.8,0.8c0.9,0,1.4-0.4,1.4-1.1c0-0.7-0.5-0.9-1.1-1.2l-0.9-0.4
				c-0.6-0.3-1.3-0.7-1.3-1.7s0.9-1.7,2.1-1.7c0.8,0,1.5,0.3,1.9,0.8l-0.4,0.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.7,0-1.2,0.4-1.2,1
				s0.6,0.9,1.1,1.1l0.9,0.4c0.8,0.3,1.3,0.8,1.3,1.7c0,1-0.8,1.9-2.2,1.9C62,547.7,61.2,547.3,60.6,546.7z">
    </path>
    <path class="st10" d="M66.2,543.5c0-0.4,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6
				C66.4,544.1,66.2,543.8,66.2,543.5z M66.2,547.1c0-0.4,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6
				C66.4,547.7,66.2,547.4,66.2,547.1z">
    </path>
    <path class="st10" d="M70.3,546.8l0.4-0.5c0.4,0.4,0.9,0.8,1.6,0.8c0.8,0,1.3-0.5,1.3-1.2c0-0.8-0.5-1.3-2-1.3V544
				c1.4,0,1.8-0.5,1.8-1.2c0-0.6-0.4-1-1.1-1c-0.5,0-1,0.3-1.4,0.7l-0.4-0.5c0.5-0.5,1.1-0.8,1.8-0.8c1.1,0,1.9,0.6,1.9,1.6
				c0,0.8-0.5,1.3-1.2,1.5l0,0c0.8,0.2,1.4,0.7,1.4,1.6c0,1.1-0.9,1.8-2.1,1.8C71.4,547.7,70.7,547.3,70.3,546.8z">
    </path>
    <path class="st10" d="M75.8,546.9h1.5v-4.7h-1.2v-0.5c0.6-0.1,1-0.3,1.3-0.5H78v5.7h1.3v0.7h-3.6L75.8,546.9L75.8,546.9z">
    </path>
    <path class="st10" d="M80.4,547.1c1.9-1.9,3-3.1,3-4.1c0-0.7-0.4-1.2-1.2-1.2c-0.5,0-1,0.3-1.4,0.8l-0.5-0.5c0.5-0.6,1.1-1,1.9-1
				c1.2,0,1.9,0.7,1.9,1.9s-1.1,2.4-2.6,4c0.3,0,0.7-0.1,1.1-0.1h1.8v0.7h-4.1L80.4,547.1L80.4,547.1z">
    </path>
    <path class="st10" d="M85.2,546.8l0.4-0.5c0.4,0.4,0.9,0.7,1.6,0.7c0.8,0,1.4-0.6,1.4-1.5s-0.5-1.4-1.4-1.4
				c-0.4,0-0.7,0.1-1.1,0.4l-0.4-0.3l0.2-3.1h3.2v0.7h-2.5l-0.2,1.9c0.3-0.2,0.6-0.3,1-0.3c1.1,0,2,0.6,2,2s-1,2.2-2.1,2.2
				C86.2,547.7,85.6,547.3,85.2,546.8z">
    </path>
    <path class="st10" d="M92.4,544.3c0-2.1,1.2-3.4,2.9-3.4c0.8,0,1.4,0.4,1.8,0.8l-0.4,0.5c-0.3-0.4-0.8-0.6-1.3-0.6
				c-1.2,0-2.1,1-2.1,2.6s0.8,2.7,2,2.7c0.6,0,1.1-0.3,1.5-0.7l0.5,0.5c-0.5,0.6-1.2,0.9-2,0.9C93.6,547.7,92.4,546.4,92.4,544.3z">
    </path>
   </g>
   <g>
    <path class="st10" d="M161.9,496.4c0-2.2,1.4-3.4,3.2-3.4c0.9,0,1.6,0.4,2,0.8l-0.8,0.9c-0.3-0.3-0.7-0.5-1.2-0.5
				c-1,0-1.7,0.8-1.7,2.1c0,1.3,0.6,2.1,1.8,2.1c0.3,0,0.5-0.1,0.7-0.2v-1.1h-1.1v-1.2h2.4v3c-0.4,0.4-1.2,0.8-2.1,0.8
				C163.3,499.7,161.9,498.5,161.9,496.4z">
    </path>
    <path class="st10" d="M168.5,494.6h1.2l0.1,0.9l0,0c0.4-0.7,0.9-1,1.4-1c0.3,0,0.4,0,0.6,0.1l-0.2,1.3c-0.2,0-0.3-0.1-0.5-0.1
				c-0.4,0-0.8,0.2-1.1,0.9v2.9h-1.5V494.6z">
    </path>
    <path class="st10" d="M172,498.2c0-1,0.8-1.6,2.8-1.8c0-0.4-0.2-0.7-0.8-0.7c-0.4,0-0.8,0.2-1.3,0.5l-0.5-1
				c0.6-0.4,1.3-0.6,2.1-0.6c1.3,0,2,0.7,2,2.2v2.8H175l-0.1-0.5l0,0c-0.4,0.4-0.9,0.6-1.4,0.6C172.5,499.7,172,499,172,498.2z
				 M174.7,498.1v-0.9c-1,0.1-1.4,0.4-1.4,0.8c0,0.3,0.2,0.5,0.6,0.5C174.3,498.6,174.5,498.4,174.7,498.1z">
    </path>
    <path class="st10" d="M177.5,494.6h1.2l0.1,0.5l0,0c0.4-0.3,0.9-0.6,1.4-0.6c1.2,0,1.9,1,1.9,2.5c0,1.7-1,2.7-2.1,2.7
				c-0.4,0-0.8-0.2-1.2-0.5v0.8v1.4h-1.5v-6.8H177.5z M180.6,497c0-0.9-0.3-1.3-0.9-1.3c-0.3,0-0.6,0.1-0.8,0.5v2
				c0.3,0.2,0.5,0.3,0.8,0.3C180.2,498.5,180.6,498.1,180.6,497z">
    </path>
    <path class="st10" d="M183.2,492.6h1.5v1.7l-0.1,0.9c0.4-0.3,0.9-0.7,1.5-0.7c1.1,0,1.5,0.8,1.5,2v3.1h-1.5v-2.9
				c0-0.7-0.2-0.9-0.6-0.9c-0.4,0-0.6,0.2-0.9,0.5v3.3h-1.5v-7H183.2z">
    </path>
    <path class="st10" d="M188.8,493.1c0-0.5,0.4-0.8,0.8-0.8c0.5,0,0.8,0.3,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8
				C189.1,493.9,188.8,493.6,188.8,493.1z M188.9,494.6h1.5v5h-1.5V494.6z">
    </path>
    <path class="st10" d="M191.9,497.8v-2h-0.7v-1.1l0.8-0.1l0.2-1.3h1.2v1.3h1.2v1.1h-1.2v2c0,0.6,0.2,0.8,0.6,0.8
				c0.2,0,0.3,0,0.5-0.1l0.2,1.1c-0.3,0.1-0.6,0.2-1.1,0.2C192.3,499.7,191.9,498.9,191.9,497.8z">
    </path>
    <path class="st10" d="M195,497.1c0-1.6,1.1-2.6,2.3-2.6c1.4,0,2.1,1,2.1,2.4c0,0.3,0,0.5-0.1,0.6h-3c0.1,0.7,0.6,1,1.3,1
				c0.4,0,0.7-0.1,1.1-0.3l0.5,0.9c-0.5,0.3-1.2,0.6-1.8,0.6C196.1,499.7,195,498.7,195,497.1z M198.2,496.6c0-0.5-0.2-0.9-0.8-0.9
				c-0.5,0-0.9,0.3-1,0.9H198.2z">
    </path>
   </g>
   <g>
    <path class="st10" d="M162.3,505h0.8v2.7h3V505h0.8v6.6h-0.8v-3.1h-3v3.1h-0.8V505z">
    </path>
    <path class="st10" d="M168.4,509.2c0-1.6,1.1-2.6,2.2-2.6c1.2,0,1.9,0.9,1.9,2.3c0,0.2,0,0.3,0,0.5h-3.3c0.1,1,0.7,1.7,1.6,1.7
				c0.5,0,0.8-0.1,1.2-0.4l0.3,0.5c-0.4,0.3-0.9,0.5-1.6,0.5C169.5,511.7,168.4,510.7,168.4,509.2z M171.8,508.8
				c0-1-0.4-1.5-1.2-1.5c-0.7,0-1.3,0.5-1.4,1.5H171.8z">
    </path>
    <path class="st10" d="M174.6,509l-1.5-2.3h0.9l0.6,1.1c0.1,0.3,0.3,0.5,0.5,0.8l0,0c0.1-0.3,0.3-0.5,0.4-0.8l0.6-1.1h0.9
				l-1.5,2.4l1.6,2.4h-0.9l-0.7-1.1c-0.2-0.3-0.4-0.6-0.5-0.9l0,0c-0.2,0.3-0.3,0.6-0.5,0.9l-0.7,1.1H173L174.6,509z">
    </path>
    <path class="st10" d="M178,507.5c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6C178.2,508.1,178,507.8,178,507.5z
				 M178,511.1c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6C178.2,511.7,178,511.4,178,511.1z">
    </path>
    <path class="st10" d="M183,509.5h-0.8V509h0.9l0.2-1.5h-0.8v-0.6h0.9l0.2-1.8h0.5l-0.2,1.8h1.3l0.2-1.8h0.5l-0.2,1.8h0.8v0.6
				h-0.9l-0.2,1.5h0.8v0.6h-0.9l-0.2,2h-0.5l0.2-2h-1.3l-0.2,2h-0.5L183,509.5z M184.9,509l0.2-1.5h-1.3l-0.2,1.5H184.9z">
    </path>
    <path class="st10" d="M191.5,509.8h-0.9v1.8h-0.8v-1.8H187v-0.5l2.7-4.1h0.9v4h0.9L191.5,509.8L191.5,509.8z M189.8,509.2v-1.8
				c0-0.3,0-0.9,0-1.2l0,0c-0.2,0.3-0.3,0.6-0.5,0.9l-1.5,2.2h2V509.2z">
    </path>
    <path class="st10" d="M195.7,506.3c-0.3-0.3-0.6-0.5-1-0.5c-0.9,0-1.6,0.7-1.7,2.7c0.4-0.5,1-0.8,1.5-0.8c1.1,0,1.8,0.7,1.8,2
				c0,1.2-0.9,2-1.9,2c-1.2,0-2.2-1-2.2-3.1c0-2.6,1.2-3.5,2.4-3.5c0.7,0,1.2,0.3,1.5,0.7L195.7,506.3z M195.5,509.6
				c0-0.8-0.4-1.3-1.2-1.3c-0.4,0-0.9,0.2-1.3,0.8c0.1,1.2,0.6,1.9,1.4,1.9C195.1,511,195.5,510.5,195.5,509.6z">
    </path>
    <path class="st10" d="M201.4,509.8h-0.9v1.8h-0.8v-1.8h-2.9v-0.5l2.7-4.1h0.9v4h0.9v0.6L201.4,509.8L201.4,509.8z M199.8,509.2
				v-1.8c0-0.3,0-0.9,0-1.2l0,0c-0.2,0.3-0.3,0.6-0.5,0.9l-1.5,2.2h2V509.2z">
    </path>
    <path class="st10" d="M201.9,510.8l0.4-0.5c0.4,0.4,0.9,0.7,1.6,0.7c0.8,0,1.4-0.6,1.4-1.5s-0.5-1.4-1.4-1.4
				c-0.4,0-0.7,0.1-1.1,0.4l-0.4-0.3l0.2-3.1h3.2v0.7h-2.5l-0.2,1.9c0.3-0.2,0.6-0.3,1-0.3c1.1,0,2,0.6,2,2s-1,2.2-2.1,2.2
				C203,511.7,202.4,511.3,201.9,510.8z">
    </path>
    <path class="st10" d="M211.4,509.8h-0.9v1.8h-0.8v-1.8h-2.9v-0.5l2.7-4.1h0.9v4h0.9v0.6L211.4,509.8L211.4,509.8z M209.7,509.2
				v-1.8c0-0.3,0-0.9,0-1.2l0,0c-0.2,0.3-0.3,0.6-0.5,0.9l-1.5,2.2h2V509.2z">
    </path>
    <path class="st10" d="M215.3,505.9h-3.2v-0.7h4.1v0.5c-1.5,1.9-1.8,3.4-1.9,5.9h-0.8C213.5,509.2,214,507.7,215.3,505.9z">
    </path>
   </g>
   <g>
    <path class="st10" d="M165.9,523.6l-1.6-2.8h-1.2v2.8h-0.8V517h2c1.3,0,2.3,0.5,2.3,1.8c0,1-0.6,1.6-1.5,1.9l1.7,2.9L165.9,523.6
				L165.9,523.6z M163.2,520.1h1.1c1,0,1.6-0.4,1.6-1.3c0-0.9-0.6-1.2-1.6-1.2h-1.1V520.1z">
    </path>
    <path class="st10" d="M167.7,520.3c0-2.1,1.3-3.4,3-3.4c0.9,0,1.5,0.4,1.9,0.8l-0.5,0.5c-0.3-0.3-0.8-0.6-1.4-0.6
				c-1.3,0-2.2,1-2.2,2.6s0.8,2.7,2.2,2.7c0.5,0,0.9-0.2,1.2-0.4v-1.7h-1.4v-0.7h2.1v2.8c-0.4,0.4-1.1,0.8-2,0.8
				C168.9,523.7,167.7,522.4,167.7,520.3z">
    </path>
    <path class="st10" d="M174.2,517h1.9c1.3,0,2.2,0.5,2.2,1.6c0,0.6-0.3,1.2-1,1.4l0,0c0.8,0.2,1.3,0.7,1.3,1.6
				c0,1.3-1,1.9-2.5,1.9H174V517H174.2z M176,519.8c1.1,0,1.6-0.4,1.6-1.1c0-0.8-0.5-1-1.5-1h-1v2.1H176z M176.2,522.9
				c1.1,0,1.8-0.4,1.8-1.3c0-0.8-0.6-1.2-1.8-1.2H175v2.5H176.2z">
    </path>
    <path class="st10" d="M179.8,519.5c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6S179.8,519.8,179.8,519.5z
				 M179.8,523.1c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6C180.1,523.7,179.8,523.4,179.8,523.1z">
    </path>
    <path class="st10" d="M187.3,517.9h-3.2v-0.7h4.1v0.5c-1.5,1.9-1.8,3.4-1.9,5.9h-0.8C185.6,521.2,186,519.7,187.3,517.9z">
    </path>
    <path class="st10" d="M189.1,520.4c0-2.1,0.8-3.3,2-3.3c1.3,0,2,1.1,2,3.3s-0.8,3.3-2,3.3C189.9,523.7,189.1,522.5,189.1,520.4z
				 M192.4,520.4c0-1.9-0.5-2.6-1.2-2.6s-1.2,0.8-1.2,2.6s0.5,2.7,1.2,2.7C191.9,523,192.4,522.2,192.4,520.4z">
    </path>
    <path class="st10" d="M194.1,524.8c0.6-0.2,0.9-0.7,0.9-1.2h-0.1c-0.3,0-0.6-0.2-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6
				c0.4,0,0.7,0.4,0.7,1c0,0.9-0.5,1.5-1.3,1.9L194.1,524.8z">
    </path>
    <path class="st10" d="M202.1,518.3c-0.3-0.3-0.6-0.5-1-0.5c-0.9,0-1.6,0.7-1.7,2.7c0.4-0.5,1-0.8,1.5-0.8c1.1,0,1.8,0.7,1.8,2
				c0,1.2-0.9,2-1.9,2c-1.2,0-2.2-1-2.2-3.1c0-2.6,1.2-3.5,2.4-3.5c0.7,0,1.2,0.3,1.5,0.7L202.1,518.3z M201.9,521.6
				c0-0.8-0.4-1.3-1.2-1.3c-0.4,0-0.9,0.2-1.3,0.8c0.1,1.2,0.6,1.9,1.4,1.9C201.4,523,201.9,522.5,201.9,521.6z">
    </path>
    <path class="st10" d="M204,522.5c0.3,0.3,0.6,0.5,1,0.5c0.9,0,1.7-0.7,1.7-2.7c-0.4,0.5-1,0.8-1.5,0.8c-1.1,0-1.8-0.7-1.8-2
				c0-1.2,0.9-2,1.9-2c1.3,0,2.2,1,2.2,3.1c0,2.6-1.2,3.5-2.4,3.5c-0.7,0-1.2-0.3-1.5-0.7L204,522.5z M206.8,519.6
				c-0.1-1.2-0.6-1.9-1.4-1.9c-0.6,0-1.1,0.6-1.1,1.4c0,0.8,0.4,1.3,1.2,1.3C205.8,520.5,206.3,520.2,206.8,519.6z">
    </path>
    <path class="st10" d="M208.5,524.8c0.6-0.2,0.9-0.7,0.9-1.2h-0.1c-0.3,0-0.6-0.2-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6
				c0.4,0,0.7,0.4,0.7,1c0,0.9-0.5,1.5-1.3,1.9L208.5,524.8z">
    </path>
    <path class="st10" d="M216.2,517.9H213v-0.7h4.1v0.5c-1.5,1.9-1.8,3.4-1.9,5.9h-0.8C214.4,521.2,214.9,519.7,216.2,517.9z">
    </path>
    <path class="st10" d="M218.3,522.9h1.5v-4.7h-1.2v-0.5c0.6-0.1,1-0.3,1.3-0.5h0.6v5.7h1.3v0.7h-3.6L218.3,522.9L218.3,522.9z">
    </path>
   </g>
   <g>
    <path class="st10" d="M162,532.3c0-2.1,1.2-3.4,2.9-3.4c0.8,0,1.4,0.4,1.8,0.8l-0.4,0.5c-0.3-0.4-0.8-0.6-1.3-0.6
				c-1.2,0-2.1,1-2.1,2.6s0.8,2.7,2,2.7c0.6,0,1.1-0.3,1.5-0.7l0.5,0.5c-0.5,0.6-1.2,0.9-2,0.9C163.2,535.7,162,534.4,162,532.3z">
    </path>
    <path class="st10" d="M168.1,529h1l1.3,3.5c0.2,0.5,0.3,0.9,0.5,1.4l0,0c0.2-0.4,0.3-0.9,0.4-1.4l1.2-3.5h1v6.6h-0.8V532
				c0-0.6,0.1-1.4,0.1-1.9l0,0l-0.5,1.5l-1.2,3.4h-0.5l-1.2-3.4l-0.5-1.5l0,0c0,0.6,0.1,1.4,0.1,1.9v3.6h-0.7V529H168.1z">
    </path>
    <path class="st10" d="M176.4,533l-2-4h0.9l0.8,1.8c0.2,0.5,0.4,0.9,0.6,1.4l0,0c0.2-0.5,0.5-0.9,0.7-1.4l0.8-1.8h0.9l-2,4v2.5
				h-0.8V533H176.4z">
    </path>
    <path class="st10" d="M180.1,529h0.8v3.3l0,0l2.7-3.3h0.9l-2,2.5l2.4,4.1H184l-2-3.4l-1.1,1.3v2.1h-0.8L180.1,529L180.1,529z">
    </path>
    <path class="st10" d="M185.6,531.5c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6
				C185.9,532.1,185.6,531.8,185.6,531.5z M185.6,535.1c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6
				C185.9,535.7,185.6,535.4,185.6,535.1z">
    </path>
    <path class="st10" d="M189.9,532.4c0-2.1,0.8-3.3,2-3.3c1.3,0,2,1.1,2,3.3s-0.8,3.3-2,3.3S189.9,534.5,189.9,532.4z M193.2,532.4
				c0-1.9-0.5-2.6-1.2-2.6s-1.2,0.8-1.2,2.6s0.5,2.7,1.2,2.7C192.7,535,193.2,534.2,193.2,532.4z">
    </path>
    <path class="st10" d="M194.9,536.8c0.6-0.2,0.9-0.7,0.9-1.2h-0.1c-0.3,0-0.6-0.2-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6
				c0.4,0,0.7,0.4,0.7,1c0,0.9-0.5,1.5-1.3,1.9L194.9,536.8z">
    </path>
    <path class="st10" d="M199.4,532.4c0-2.1,0.8-3.3,2-3.3c1.3,0,2,1.1,2,3.3s-0.8,3.3-2,3.3C200.1,535.7,199.4,534.5,199.4,532.4z
				 M202.7,532.4c0-1.9-0.5-2.6-1.2-2.6s-1.2,0.8-1.2,2.6s0.5,2.7,1.2,2.7C202.2,535,202.7,534.2,202.7,532.4z">
    </path>
    <path class="st10" d="M204.4,536.8c0.6-0.2,0.9-0.7,0.9-1.2h-0.1c-0.3,0-0.6-0.2-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6
				c0.4,0,0.7,0.4,0.7,1c0,0.9-0.5,1.5-1.3,1.9L204.4,536.8z">
    </path>
    <path class="st10" d="M208.8,532.4c0-2.1,0.8-3.3,2-3.3c1.3,0,2,1.1,2,3.3s-0.8,3.3-2,3.3S208.8,534.5,208.8,532.4z M212.1,532.4
				c0-1.9-0.5-2.6-1.2-2.6s-1.2,0.8-1.2,2.6s0.5,2.7,1.2,2.7C211.6,535,212.1,534.2,212.1,532.4z">
    </path>
    <path class="st10" d="M213.8,536.8c0.6-0.2,0.9-0.7,0.9-1.2h-0.1c-0.3,0-0.6-0.2-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6
				c0.4,0,0.7,0.4,0.7,1c0,0.9-0.5,1.5-1.3,1.9L213.8,536.8z">
    </path>
   </g>
   <g>
    <path class="st10" d="M217.5,533.9c0-0.8,0.6-1.4,1.2-1.7l0,0c-0.5-0.3-0.9-0.8-0.9-1.5c0-1,0.8-1.6,1.8-1.6
				c1.1,0,1.8,0.7,1.8,1.7c0,0.7-0.5,1.2-0.9,1.5l0,0c0.6,0.3,1.1,0.8,1.1,1.6c0,0.9-0.8,1.7-2.1,1.7
				C218.3,535.7,217.5,535,217.5,533.9z M220.8,534c0-0.8-0.8-1.1-1.7-1.5c-0.5,0.3-0.9,0.8-0.9,1.4c0,0.7,0.6,1.2,1.4,1.2
				C220.3,535.1,220.8,534.6,220.8,534z M220.7,530.8c0-0.6-0.4-1.1-1.1-1.1c-0.6,0-1,0.4-1,1c0,0.8,0.7,1.1,1.5,1.4
				C220.4,531.7,220.7,531.3,220.7,530.8z">
    </path>
    <path class="st10" d="M222.4,533.9c0-0.8,0.6-1.4,1.2-1.7l0,0c-0.5-0.3-0.9-0.8-0.9-1.5c0-1,0.8-1.6,1.8-1.6
				c1.1,0,1.8,0.7,1.8,1.7c0,0.7-0.5,1.2-0.9,1.5l0,0c0.6,0.3,1.1,0.8,1.1,1.6c0,0.9-0.8,1.7-2.1,1.7
				C223.3,535.7,222.4,535,222.4,533.9z M225.8,534c0-0.8-0.8-1.1-1.7-1.5c-0.5,0.3-0.9,0.8-0.9,1.4c0,0.7,0.6,1.2,1.4,1.2
				C225.3,535.1,225.8,534.6,225.8,534z M225.6,530.8c0-0.6-0.4-1.1-1.1-1.1c-0.6,0-1,0.4-1,1c0,0.8,0.7,1.1,1.5,1.4
				C225.4,531.7,225.6,531.3,225.6,530.8z">
    </path>
   </g>
  </g>
  <rect x="47.3" y="471.6" class="st11" width="57.1" height="13.5">
  </rect>
  <rect x="161.4" y="471.6" class="st12" width="57.1" height="13.5">
  </rect>
 </g>
 <g>
  <g>
   <path class="st13" d="M102.7,67.9h30.1V34.6c0-9.3-4.4-14-13.4-14H116c-8.9,0-13.4,4.7-13.4,14L102.7,67.9L102.7,67.9z
			 M102.7,89.2l0.1,36.6c0,9.3,4.5,13.9,13.4,13.9h3.9c8.9,0,13.4-4.6,13.4-13.9v-18H154v17.1c0,23.5-11.4,35.5-34,35.5h-4.5
			c-22.6,0-34-11.9-34-32.7V38.2c0-26.3,11.4-38.2,34-38.2h4.5c22.6,0,34,11.9,34,35.4l-0.1,53.7L102.7,89.2L102.7,89.2z">
   </path>
   <path class="st13" d="M188.9,131.3c5.8,5.2,12.5,8.1,19.5,8.1c7.8,0,12.3-3.8,12.3-12.8v-93c0-9-4.5-12.8-12.3-12.8
			c-7,0-13.7,2.9-19.5,8.1V131.3z M167.7,1.8h21.2V12c5-5.5,13.6-11.9,25.9-11.9c18.1,0,27,12.5,27,31.1v98.2
			c0,18.6-8.9,31.1-27,31.1c-12.3,0-20.9-6.1-25.9-11.3v50.6h-21.2V1.8z">
   </path>
   <path class="st13" d="M305.3,132.2V80.5l-19.2,7.6c-7.8,3.2-10.3,7.3-10.3,16.3v23.8c0,7.6,3.6,11.3,10.3,11.3
			C292.5,139.5,298.4,137.2,305.3,132.2 M254.6,104c0-19.5,6.1-27.3,22.3-33.1l28.4-10.2V34.6c0-9.3-4.5-14.2-13.4-14.2h-3.4
			c-8.9,0-13.4,4.9-13.4,14.2v22.2h-20.6V35.5c0-23.5,11.4-35.4,34-35.4h4c22.6,0,34,11.9,34,35.4v123.2h-21.2v-9.9
			c-5.8,5.8-13.7,11.6-25.9,11.6c-17,0-24.8-10.2-24.8-27.6V104z">
   </path>
   <path class="st13" d="M412.1,158.7h-21.2V32.3c0-7.8-3.6-11.3-10-11.3c-5.8,0-12,2.3-19.5,7.8v129.9h-21.2V1.8h21.2V12
			c6.2-6.1,14.2-12,25.9-12c10.9,0,18.1,4.7,22,12.8C416.9,6.1,425.8,0,438,0c16.4,0,24.8,10.5,24.8,27.6v131h-21.2V32.3
			c0-7.8-3.6-11.3-10-11.3c-5.8,0-12,2.3-19.5,7.8L412.1,158.7L412.1,158.7z">
   </path>
  </g>
  <polygon class="st14" points="0,70.2 0,91.4 54.4,144.7 54.4,115.2 18.8,80.5 54.4,45.1 54.4,16.2 	">
  </polygon>
  <polygon class="st14" points="489.7,45.1 525.3,80.5 489.7,115.3 489.7,144.7 544.1,91.4 544.1,70.2 489.7,16.2 	">
  </polygon>
 </g>
`}),w0=q({meta:{src:"/_astro/hays-logo.D6oSk9by.svg",width:2500,height:669,format:"svg"},attributes:{height:"669",viewBox:"-.057 -.252 94.596 24.55",width:"2500"},children:'<path d="m85.544 8.506c-2.548-.428-5.055-.288-5.253-1.348-.212-.97 1.125-1.195 2.119-1.146 2.078-.09 5.058.824 6.79 1.489.01-.02 3.38-5.28 3.38-5.28-2.89-1.534-7.292-2.473-11.472-2.161-5.448.406-8.708 3.77-8.515 7.695.02 5.038 4.97 6.513 7.387 6.925 3.53.678 6.265.38 6.159 1.722-.01.91-1.714 1.214-3.526 1.099-2.053 0-4.877-.601-7.448-2.185l-3.524 5.48c4.058 2.87 8.918 3.502 12.755 3.217 5.115-.467 9.019-2.871 9.38-7.048.763-5.61-3.756-7.814-8.232-8.46m-66.271-8.239c-2.034 0-4.067.03-4.008.09v7.682c.02-.02-1.804-.03-3.625-.03s-3.643.01-3.625.03v-7.683c.06-.06-1.973-.09-4.007-.09-2.031 0-4.065.03-4.007.09v23.385c0 .06 2.002.09 4.007.09 2.007 0 4.015-.03 4.007-.09v-8.03c0 .02 1.81.03 3.625.03 1.814 0 3.628 0 3.625-.03v8.03c-.01.06 1.999.09 4.008.09 2.006 0 4.014-.03 4.006-.09v-23.385c.06-.06-1.974-.09-4.006-.09m16.812 14.515c-.02.03 2.293-6.58 2.29-6.548 0-.03 2.178 6.58 2.155 6.548.02.03-4.47.03-4.445 0m6.367-14.44c.04-.117-8.182-.117-8.142 0-.04-.117-9.492 23.51-9.358 23.39-.134.12 7.922.12 7.999 0 .02-.1 1.114-3.215 1.157-3.298-.04.09 8.32.09 8.28 0 .04.08 1.066 3.203 1.085 3.299.08.119 8.336.119 8.2 0 .136.119-9.18-23.508-9.221-23.39m31.087 0c.134-.12-9.387 14.93-9.426 14.898v8.49c.04.12-7.948.12-7.906 0v-8.49c-.04.03-9.557-15.017-9.424-14.898-.133-.12 8.416-.12 8.465 0-.05-.12 4.91 7.714 4.91 7.753 0-.04 4.96-7.872 4.912-7.753.05-.12 8.603-.12 8.469 0" fill="#092e74" />'}),M0=q({meta:{src:"/_astro/kuka-logo.T4kNzAOC.svg",width:2500,height:429,format:"svg"},attributes:{height:"429",viewBox:"0 -36 12002 2110",width:"2500"},children:'<path d="m3576 2044c-229-42-408-165-490-337-73-153-70-108-73-949l-4-758h660l3 667c3 653 3 669 24 713 25 53 78 103 131 121 56 20 970 20 1026 0 53-18 106-68 131-121 21-44 21-60 24-713l3-667h660l-4 753c-3 676-5 759-20 817-58 216-198 365-412 438-145 50-180 52-904 51-538-1-692-4-755-15zm-3576-1029v-1015h650v980l293-249c160-137 420-357 577-490l285-241h470c268 0 465 4 460 9-6 5-125 100-266 212-140 112-416 332-612 488l-356 285 41 35c23 20 83 70 134 111 345 281 1063 876 1063 883 1 4-207 7-461 7h-463l-75-66c-41-37-122-107-180-158-58-50-287-250-508-443l-402-352v1019h-650zm6160 0v-1015h660l2 486 3 485 141-118c179-150 517-437 792-671l214-182h465c279 0 462 4 459 9-4 5-104 88-224 183-119 96-394 315-610 488-216 172-389 317-385 321s280 233 613 507c551 456 606 498 617 482 7-10 239-380 516-822s554-885 617-986l115-182h590l201 323c111 177 392 626 624 997 233 371 425 683 428 692 4 17-18 18-370 18h-374l-97-160c-54-88-100-167-103-175-5-13-82-15-603-15h-596l-105 175-105 175h-1663l-573-502c-316-276-577-506-581-512s-8 220-8 502v512h-660zm4623 197c-163-281-329-562-334-562-3 0-77 123-165 273-87 149-167 287-177 305l-19 32h722z" fill="#ff5c00" /><g fill="#ff6102"><path d="m3587 2046c-57-11-101-26-71-26 23 1 187 30 192 35 8 8-47 4-121-9zm156 7c9-2 25-2 35 0 9 3 1 5-18 5s-27-2-17-5zm1160 0c9-2 25-2 35 0 9 3 1 5-18 5s-27-2-17-5zm59 1c3-3 34-9 69-14 232-34 402-123 498-260 53-75 78-135 102-240 17-79 19-136 19-812 0-498 3-728 10-728 8 0 10 235 7 753-3 676-5 759-20 817-58 216-198 365-412 438-92 32-292 66-273 46zm-4962-1039v-1015h650v490c0 270 3 490 8 490 4 0 20-14 35-30 16-17 34-30 41-30s22-14 35-30c12-17 26-28 32-25 5 4 8 3 7-2-2-4 7-18 20-31 12-12 22-20 22-18s21-16 47-40c25-24 51-40 56-37 6 3 8 2 5-3s3-17 14-26c10-10 18-15 18-11 0 3 8-4 19-15 10-12 24-22 30-22 7 0 9-4 6-10-3-5 1-10 10-10 8 0 18-7 21-15 4-8 10-12 15-9s9-2 9-10c0-9 5-16 10-16 6 0 20-11 32-25 11-13 24-22 29-20 4 3 16-5 26-18s33-32 51-42c17-11 32-25 32-32 0-6 5-15 12-19 7-5 9-2 3 7-4 8 12-6 35-31s38-38 35-30c-4 8 5 2 20-15 14-16 23-24 19-16-5 9-3 12 4 7 7-4 12-13 12-21s5-17 12-21c7-5 9-2 4 7-4 8 2 2 14-14 12-15 26-24 31-21s8 0 7-7c-3-12 1-14 34-18 6 0 8-4 5-8-6-5 15-27 60-63 7-6 17-10 23-10s9-4 5-9c-3-5 13-20 35-34 22-13 37-26 34-29-3-4 4-9 15-13 12-3 21-11 21-16s4-9 9-9 7 8 5 18c-3 9 4 64 15 122s35 186 52 285c18 99 35 184 40 189 4 4 202-148 440-338 239-190 440-346 448-346 19 0 38-16-260 221-140 112-416 332-612 488l-356 285 41 35c23 20 83 70 134 111 348 283 1063 876 1063 883 1 4-209 6-466 5-355-2-467-6-466-15 2-6-6-15-17-18-11-4-20-11-20-17s-2-9-5-6c-6 5-53-33-120-99-24-23-45-40-47-37-3 2-11-7-18-21-7-13-28-31-46-40-19-9-34-18-34-21s5-2 12 2 8 3 4-4-12-12-17-12c-18 0-79-52-79-66 0-8-7-14-16-14s-41-26-72-57c-31-32-52-51-47-43s-7 0-26-19c-18-19-33-39-31-44 1-4-2-6-8-2-5 3-10 1-10-4 0-6-5-11-11-11-10 0-37-22-105-88-19-18-34-30-34-26 0 3-16-10-36-30s-40-36-45-36-21-18-35-40c-15-22-34-40-43-40-18 0-57-40-53-53 1-5-1-6-5-4-9 6-39-13-41-25-1-5-4-7-6-5-9 5-45-36-39-46 3-6 1-7-5-3s-29-11-50-34c-22-22-42-40-46-40-3 0-6 230-6 510v510h-650zm2680 980c-21-20-705-584-706-582-1 1 18 108 42 237s49 263 55 298l11 62h306c268 0 304-2 292-15zm3480 28c0-5 144-7 320-5l320 3v-1011c0-667 3-1010 10-1010s10 345 10 1015v1015h-330c-181 0-330-3-330-7zm2267-3 452-5-614-505c-337-278-614-509-614-515 0-10 1219-986 1241-994 27-9-17 29-220 191-119 96-394 315-610 488-372 297-392 315-375 330 10 9 289 240 620 514l602 496 363-2 363-3 104-172 104-173 601 2 601 3-595 3-595 2-105 175-105 175-835-2c-708-2-766-3-383-8zm3195 0 366-5-385-615c-212-338-495-790-629-1004s-241-392-239-395c7-6-13-37 275 424 145 231 425 679 623 995s362 583 365 592c4 17-17 18-369 16l-374-3zm-8200-21c-29-12-52-23-49-25 4-4 127 36 127 42 0 8-27 2-78-17zm438-475c-74-16-135-54-163-102-45-76-46-101-47-779 0-417 3-643 9-643 7 0 11 237 13 668 3 618 4 670 21 707 36 80 88 118 190 138 34 7 57 15 52 19-6 3-39-1-75-8zm100 6c0-6 132-10 375-10s375 4 375 10-132 10-375 10-375-4-375-10zm795-6c55-15 97-22 88-13-5 5-31 11-58 14-28 2-41 2-30-1zm-1740-864c0-366 1-515 2-332 2 182 2 482 0 665-1 182-2 33-2-333z" /><path d="m10070 1265c0-13 375-646 378-637 3 11-360 641-370 642-5 0-8-2-8-5z" /></g>'}),C0=q({meta:{src:"/_astro/ntt-data-logo.B1kPGcZm.svg",width:2500,height:406,format:"svg"},attributes:{height:"406",width:"2500",viewBox:"5 5 500 72.88000000000001"},children:'<g fill="#6485c1"><path d="M80.82 5.76V20.8h22.875v56.283h16.197V20.799h22.874V5.76zM347.452 5.76h-40.795v15.162h39.69c5.849 0 8.114 2.667 8.114 9.462v2.541h-32.919c-12.527 0-18.743 6.247-18.743 20.398v3.372c0 14.542 6.46 20.388 19.45 20.388h48.258V30.206c0-17.945-5.94-24.446-23.055-24.446m-23.518 56.076c-2.453 0-5.206-1.222-5.206-7.352 0-6.125 2.689-7.196 5.206-7.196h30.527v14.549zM481.943 5.76h-40.786v15.162h39.714c5.816 0 8.082 2.667 8.082 9.462v2.541h-32.885c-12.528 0-18.769 6.247-18.769 20.398v3.372c0 14.542 6.461 20.388 19.442 20.388H505V30.206c0-17.945-5.941-24.446-23.056-24.446m-23.518 56.076c-2.452 0-5.202-1.222-5.202-7.352 0-6.125 2.694-7.196 5.202-7.196h30.528v14.549zM147.91 5.76V20.8h22.875v56.283h16.236V20.799h22.875V5.76zM373.753 5.76V20.8h22.874v56.283h16.196V20.799h22.875V5.76zM296.528 52.1V30.754c0-18.652-7.227-24.96-23.58-24.96h-43.391v71.288h44.151c17.332 0 22.82-8.63 22.82-24.981m-16.54.337c0 6.795-2.296 9.462-8.114 9.462h-26.09V20.955h26.09c5.818 0 8.115 2.664 8.115 9.523zM57.946 60.086c-.337-.643-21.956-42.81-24.623-46.972C30.266 8.34 26.558 5 19.456 5 12.84 5 5 7.908 5 23.799v53.316h15.955V32.648c0-3.181-.181-7.93-.215-8.88-.03-.793 0-1.528.401-1.742.423-.282.885.15 1.222.731.306.619 20.361 40.3 24.648 47.003 3.034 4.813 6.773 8.12 13.874 8.12 6.618 0 14.426-2.94 14.426-18.805V5.76H59.357v44.467c0 3.212.18 7.93.242 8.88 0 .769 0 1.528-.398 1.748-.463.276-.919-.156-1.256-.768" /></g>'}),S0={src:"/_astro/startplatz-logo.BjvzIfTD.png",width:1024,height:504,format:"png"},A0=q({meta:{src:"/_astro/zeiss-logo._GutzIYU.svg",width:2500,height:2500,format:"svg"},attributes:{height:"2500",viewBox:"0 0 566.929 566.929",width:"2500"},children:'<path d="m566.929 566.929c-180.312-80.927-386.617-80.927-566.929 0v-566.929h566.929z" fill="#141e8c" /><path d="m67.233 172.985c-15.194.09-27.751 11.876-28.801 27.034h-12.723v-40.022h99.215s.795 30.922-28.536 63.699c0 0-27.918 32.424-28.625 46.648h16.079c23.059 0 25.444-27.034 25.444-27.034h13.252v40.11h-101.423s-3.711-30.392 31.452-67.233c0 0 21.645-24.207 26.681-43.291zm252.675 110.347v-13.075h-3.004c-5.456.009-9.886-4.407-9.895-9.862v-77.426c-.009-5.456 4.407-9.886 9.862-9.895h3.037v-13.075h-65.819v13.076h3.004c5.466-.047 9.936 4.346 9.983 9.813v77.475c-.002 5.467-4.434 9.897-9.901 9.895h-3.086v13.076zm-79.425.088v-40.11h-13.252s-2.474 27.034-25.533 27.034h-13.252v-42.054h4.682c5.477-.037 9.947 4.374 9.983 9.851v5.08h13.076v-43.201h-13.076v5.036c.037 5.477-4.374 9.947-9.851 9.983h-4.815v-42.054h13.252c23.059 0 25.533 27.034 25.533 27.034h13.252v-40.11h-104.514v13.164h3.004c5.456-.009 9.886 4.407 9.895 9.862v77.426c.009 5.456-4.407 9.886-9.862 9.895h-3.037v13.075zm148.513-110.435c15.199.038 27.761 11.865 28.713 27.034h12.81v-40.022h-94.797s-15.019 19.613 24.207 63.699c0 0 27.83 32.424 28.536 46.648h-15.991c-23.059 0-25.533-27.034-25.533-27.034h-13.341v40.11h95.593s17.405-18.73-25.621-67.233c0 0-22.529-23.147-26.681-43.291zm110.877 0c15.182.08 27.72 11.884 28.713 27.034h12.722v-40.022h-94.709s-15.019 19.613 24.207 63.699c0 0 27.83 32.424 28.536 46.648h-15.991c-23.059 0-25.533-27.034-25.533-27.034h-13.252v40.11h95.592s17.316-18.73-25.621-67.233c0 0-22.529-23.147-26.593-43.291z" fill="#fff" />'}),L0={bbraun:se,bmw:k0,epam:z0,hays:w0,kuka:M0,"ntt-data":C0,startplatz:S0,zeiss:A0};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("infinite-carousel");if(!e)return;const t=Object.entries(L0).map(([x,z])=>({key:x,src:z.src,alt:`${x.charAt(0).toUpperCase()+x.slice(1).replace("-"," ")} Logo`}));let s=[...t,...t];const n=160,r=e.parentElement;if(!r)return;let a=0,i,c=!1;const h=1;function l(){e.innerHTML=s.map(x=>`<div class="brand-logo flex-shrink-0 w-32 h-16 flex items-center justify-center mx-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" role="img" aria-label="${x.alt}">
          <img src="${x.src}" alt="${x.alt}" class="w-full h-full object-contain" loading="lazy" />
        </div>`).join("")}function v(){if(!c){a-=h,e.style.transform=`translateX(${a}px)`;const x=t.length*n;Math.abs(a)>x*.8&&(s=[...s,...t],l());const z=t.length*3;if(s.length>z){const O=t.length;s=s.slice(O),a+=O*n}}i=requestAnimationFrame(v)}const k=new IntersectionObserver(x=>{x.forEach(z=>{z.isIntersecting?i||v():i&&(cancelAnimationFrame(i),i=0)})},{threshold:.1});k.observe(r),l(),r.addEventListener("mouseenter",()=>{c=!0}),r.addEventListener("mouseleave",()=>{c=!1}),r.addEventListener("keydown",x=>{x.key==="ArrowLeft"?(a+=n*2,e.style.transform=`translateX(${a}px)`):x.key==="ArrowRight"&&(a-=n*2,e.style.transform=`translateX(${a}px)`)}),r.tabIndex=0,r.setAttribute("aria-label","Client logos carousel - use arrow keys to navigate"),window.addEventListener("beforeunload",()=>{i&&cancelAnimationFrame(i),k.disconnect()})});
