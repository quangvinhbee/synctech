var xe = (t, e, s) => {
  if (!e.has(t)) throw TypeError("Cannot " + s);
};
var A = (t, e, s) => (
    xe(t, e, "read from private field"), s ? s.call(t) : e.get(t)
  ),
  I = (t, e, s) => {
    if (e.has(t))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, s);
  },
  L = (t, e, s, i) => (
    xe(t, e, "write to private field"), i ? i.call(t, s) : e.set(t, s), s
  );
var H = (t, e, s) => (xe(t, e, "access private method"), s);
import {
  S as ne,
  i as he,
  s as le,
  e as Oe,
  b as G,
  f as B,
  g as et,
  t as V,
  d as tt,
  h as T,
  o as st,
  k as q,
  l as U,
  m as k,
  n as $,
  B as xt,
  C as $e,
  D as ce,
  q as yt,
  r as bt,
  E as Q,
  F as fe,
  u as wt,
  G as Fe,
  H as it,
  A as rt,
  I as nt,
  a as oe,
  c as de,
  J as ht,
  K as lt,
  L as at,
  M as Ie,
  v as te,
  w as se,
  x as ie,
  y as re,
  N as Mt,
} from "../../chunks/index-0f9def9f.js";
import { d as Et, r as At, f as Be } from "../../chunks/stores-7d1df338.js";
import { c as Y } from "../../chunks/singletons-992bbdee.js";
const zt = `#version 300 es
struct Layer{mediump float scale;mediump float speed;mediump vec3 position;};struct Vignette{mediump float radius;mediump float softness;mediump float strength;};struct LayerGroup{Vignette vignette;Layer layers[3];int layers_count;};uniform mediump float u_time;uniform mediump vec2 u_offset;uniform mediump vec2 u_resolution;uniform mediump vec2 u_pageResolution;uniform mediump vec2 u_aspectRatio;uniform mediump float u_scale;uniform LayerGroup u_gradient;uniform mediump vec2 u_mouse;out mediump vec2 v_uv;layout(location=1)in mediump vec2 uv;out mediump vec2 v_puv;out mediump vec2 v_fuv;out mediump vec3 v_color;layout(location=0)in mediump vec3 position;float _713;vec3 _715;void main(){v_uv=uv;v_uv.x+=(u_offset.x/u_resolution.x);v_uv.y-=((u_offset.y/u_resolution.y)+1.0);v_puv=v_uv;v_fuv=(u_pageResolution/u_resolution)+v_puv;v_uv.y*=u_aspectRatio.y;v_uv*=u_scale;mediump float _712;mediump vec3 _714;_714=_715;_712=_713;for(int _711=0;_711<u_gradient.layers_count;){mediump vec2 _457=(v_uv*u_gradient.layers[_711].scale)+vec2(u_time*u_gradient.layers[_711].speed);mediump vec2 _481=floor(_457+vec2(dot(_457,vec2(0.3660254180431365966796875))));mediump vec2 _488=(_457-_481)+vec2(dot(_481,vec2(0.211324870586395263671875)));mediump float _490=_488.x;mediump float _492=_488.y;bvec2 _494=bvec2(_490>_492);vec2 _495=vec2(_494.x ? vec2(1.0,0.0).x : vec2(0.0,1.0).x,_494.y ? vec2(1.0,0.0).y : vec2(0.0,1.0).y);mediump vec4 _498=_488.xyxy+vec4(0.211324870586395263671875,0.211324870586395263671875,-0.57735025882720947265625,-0.57735025882720947265625);mediump vec2 _502=_498.xy-_495;mediump vec4 _694=_498;_694.x=_502.x;mediump vec4 _696=_694;_696.y=_502.y;mediump vec2 _617=_481-(floor(_481*0.00346020772121846675872802734375)*289.0);mediump vec3 _515=vec3(_617.y)+vec3(0.0,_495.y,1.0);mediump vec3 _626=((_515*34.0)+vec3(10.0))*_515;mediump vec3 _524=((_626-(floor(_626*0.00346020772121846675872802734375)*289.0))+vec3(_617.x))+vec3(0.0,_495.x,1.0);mediump vec3 _644=((_524*34.0)+vec3(10.0))*_524;mediump vec3 _543=max(vec3(0.5)-vec3(dot(_488,_488),dot(_696.xy,_696.xy),dot(_696.zw,_696.zw)),vec3(0.0));mediump vec3 _546=_543*_543;mediump vec3 _553=fract((_644-(floor(_644*0.00346020772121846675872802734375)*289.0))*vec3(0.024390242993831634521484375))*2.0;mediump vec3 _555=_553-vec3(1.0);mediump vec3 _559=abs(_555)-vec3(0.5);mediump vec3 _566=_555-floor(_553+vec3(-0.5));mediump vec3 _706=_714;_706.x=(_566.x*_490)+(_559.x*_492);mediump vec2 _601=(_566.yz*_696.xz)+(_559.yz*_696.yw);mediump vec3 _708=_706;_708.y=_601.x;mediump vec3 _710=_708;_710.z=_601.y;_714=_710;_712+=(dot((_546*_546)*(vec3(1.792842864990234375)-(((_566*_566)+(_559*_559))*0.8537347316741943359375)),_710)*43.33333587646484375);_711++;continue;}v_color=vec3(0.1960999965667724609375,0.06669999659061431884765625,0.431400001049041748046875)+(vec3(0.24709999561309814453125,0.047100000083446502685546875,0.4471000134944915771484375)*cos(((vec3(0.2626999914646148681640625,0.06669999659061431884765625,0.06669999659061431884765625)*_712)+vec3(0.741199970245361328125,0.4979999959468841552734375,0.780399978160858154296875))*6.28318023681640625));v_color=mix(v_color,vec3(0.0),vec3(smoothstep(u_gradient.vignette.radius,u_gradient.vignette.radius-u_gradient.vignette.softness,length(uv-vec2(0.5)))*u_gradient.vignette.strength));gl_Position=vec4(position,1.0);}`,
  Ft = `#version 300 es
precision mediump float;precision highp int;struct Layer{float scale;float speed;vec3 position;};struct Vignette{float radius;float softness;float strength;};struct LayerGroup{Vignette vignette;Layer layers[3];mediump int layers_count;};uniform vec2 u_mouse;uniform float u_time;uniform LayerGroup u_particles;uniform vec2 u_resolution;uniform vec2 u_pageResolution;uniform vec2 u_aspectRatio;uniform vec2 u_offset;in vec2 v_uv;in vec2 v_puv;in vec2 v_fuv;in vec3 v_color;layout(location=0)out vec4 fragColor;float _1542;vec3 _1550;void main(){float _1541;vec3 _1549;vec3 _1552;vec3 _1554;_1554=_1550;_1552=_1550;_1549=_1550;_1541=_1542;float _566;vec3 _1492;vec3 _1512;vec3 _1532;for(mediump int _1540=0;_1540<u_particles.layers_count;_1554=_1532,_1552=_1512,_1549=_1492,_1541=_566,_1540++){float _644=u_time*u_particles.layers[_1540].speed;vec2 _715=((v_uv+(u_mouse*u_particles.layers[_1540].speed))+u_particles.layers[_1540].position.xy)*u_particles.layers[_1540].scale;vec2 _716=floor(_715);vec2 _720=fract(_715);mediump int _1546;float _1547;_1547=8.0;_1546=-1;float _1559;for(;_1546<=1;_1547=_1559,_1546++){_1559=_1547;for(mediump int _1557=-1;_1557<=1;){vec2 _735=vec2(float(_1557),float(_1546));vec2 _739=_716+_735;vec2 _755=(_735-_720)+(vec2(0.5)+(sin(vec2(_644)+(fract(sin(vec2(dot(_739,vec2(127.09999847412109375,311.70001220703125)),dot(_739,vec2(269.5,183.3000030517578125))))*43758.546875)*6.283100128173828125))*0.5));_1559=min(_1559,dot(_755,_755));_1557++;continue;}}vec2 _651=v_uv*2.0;vec2 _803=floor(_651+vec2(dot(_651,vec2(0.3660254180431365966796875))));vec2 _810=(_651-_803)+vec2(dot(_803,vec2(0.211324870586395263671875)));float _812=_810.x;float _814=_810.y;bvec2 _816=bvec2(_812>_814);highp vec2 _817=vec2(_816.x ? vec2(1.0,0.0).x : vec2(0.0,1.0).x,_816.y ? vec2(1.0,0.0).y : vec2(0.0,1.0).y);vec4 _820=_810.xyxy+vec4(0.211324870586395263671875,0.211324870586395263671875,-0.57735025882720947265625,-0.57735025882720947265625);vec2 _824=_820.xy-_817;vec4 _1476=_820;_1476.x=_824.x;vec4 _1478=_1476;_1478.y=_824.y;vec2 _939=_803-(floor(_803*0.00346020772121846675872802734375)*289.0);vec3 _837=vec3(_939.y)+vec3(0.0,_817.y,1.0);vec3 _948=((_837*34.0)+vec3(10.0))*_837;vec3 _846=((_948-(floor(_948*0.00346020772121846675872802734375)*289.0))+vec3(_939.x))+vec3(0.0,_817.x,1.0);vec3 _966=((_846*34.0)+vec3(10.0))*_846;vec3 _865=max(vec3(0.5)-vec3(dot(_810,_810),dot(_1478.xy,_1478.xy),dot(_1478.zw,_1478.zw)),vec3(0.0));vec3 _868=_865*_865;vec3 _875=fract((_966-(floor(_966*0.00346020772121846675872802734375)*289.0))*vec3(0.024390242993831634521484375))*2.0;vec3 _877=_875-vec3(1.0);vec3 _881=abs(_877)-vec3(0.5);vec3 _888=_877-floor(_875+vec3(-0.5));vec3 _1488=_1549;_1488.x=(_888.x*_812)+(_881.x*_814);vec2 _923=(_888.yz*_1478.xz)+(_881.yz*_1478.yw);vec3 _1490=_1488;_1490.y=_923.x;_1492=_1490;_1492.z=_923.y;vec2 _661=(v_uv+vec2(u_time*0.0500000007450580596923828125))+vec2(dot((_868*_868)*(vec3(1.792842864990234375)-(((_888*_888)+(_881*_881))*0.8537347316741943359375)),_1492)*6.5);vec2 _997=floor(_661+vec2(dot(_661,vec2(0.3660254180431365966796875))));vec2 _1004=(_661-_997)+vec2(dot(_997,vec2(0.211324870586395263671875)));float _1006=_1004.x;float _1008=_1004.y;bvec2 _1010=bvec2(_1006>_1008);highp vec2 _1011=vec2(_1010.x ? vec2(1.0,0.0).x : vec2(0.0,1.0).x,_1010.y ? vec2(1.0,0.0).y : vec2(0.0,1.0).y);vec4 _1014=_1004.xyxy+vec4(0.211324870586395263671875,0.211324870586395263671875,-0.57735025882720947265625,-0.57735025882720947265625);vec2 _1018=_1014.xy-_1011;vec4 _1496=_1014;_1496.x=_1018.x;vec4 _1498=_1496;_1498.y=_1018.y;vec2 _1133=_997-(floor(_997*0.00346020772121846675872802734375)*289.0);vec3 _1031=vec3(_1133.y)+vec3(0.0,_1011.y,1.0);vec3 _1142=((_1031*34.0)+vec3(10.0))*_1031;vec3 _1040=((_1142-(floor(_1142*0.00346020772121846675872802734375)*289.0))+vec3(_1133.x))+vec3(0.0,_1011.x,1.0);vec3 _1160=((_1040*34.0)+vec3(10.0))*_1040;vec3 _1059=max(vec3(0.5)-vec3(dot(_1004,_1004),dot(_1498.xy,_1498.xy),dot(_1498.zw,_1498.zw)),vec3(0.0));vec3 _1062=_1059*_1059;vec3 _1069=fract((_1160-(floor(_1160*0.00346020772121846675872802734375)*289.0))*vec3(0.024390242993831634521484375))*2.0;vec3 _1071=_1069-vec3(1.0);vec3 _1075=abs(_1071)-vec3(0.5);vec3 _1082=_1071-floor(_1069+vec3(-0.5));vec3 _1508=_1552;_1508.x=(_1082.x*_1006)+(_1075.x*_1008);vec2 _1117=(_1082.yz*_1498.xz)+(_1075.yz*_1498.yw);vec3 _1510=_1508;_1510.y=_1117.x;_1512=_1510;_1512.z=_1117.y;vec2 _675=v_uv+vec2(u_time*0.07999999821186065673828125);vec2 _1191=floor(_675+vec2(dot(_675,vec2(0.3660254180431365966796875))));vec2 _1198=(_675-_1191)+vec2(dot(_1191,vec2(0.211324870586395263671875)));float _1200=_1198.x;float _1202=_1198.y;bvec2 _1204=bvec2(_1200>_1202);highp vec2 _1205=vec2(_1204.x ? vec2(1.0,0.0).x : vec2(0.0,1.0).x,_1204.y ? vec2(1.0,0.0).y : vec2(0.0,1.0).y);vec4 _1208=_1198.xyxy+vec4(0.211324870586395263671875,0.211324870586395263671875,-0.57735025882720947265625,-0.57735025882720947265625);vec2 _1212=_1208.xy-_1205;vec4 _1516=_1208;_1516.x=_1212.x;vec4 _1518=_1516;_1518.y=_1212.y;vec2 _1327=_1191-(floor(_1191*0.00346020772121846675872802734375)*289.0);vec3 _1225=vec3(_1327.y)+vec3(0.0,_1205.y,1.0);vec3 _1336=((_1225*34.0)+vec3(10.0))*_1225;vec3 _1234=((_1336-(floor(_1336*0.00346020772121846675872802734375)*289.0))+vec3(_1327.x))+vec3(0.0,_1205.x,1.0);vec3 _1354=((_1234*34.0)+vec3(10.0))*_1234;vec3 _1253=max(vec3(0.5)-vec3(dot(_1198,_1198),dot(_1518.xy,_1518.xy),dot(_1518.zw,_1518.zw)),vec3(0.0));vec3 _1256=_1253*_1253;vec3 _1263=fract((_1354-(floor(_1354*0.00346020772121846675872802734375)*289.0))*vec3(0.024390242993831634521484375))*2.0;vec3 _1265=_1263-vec3(1.0);vec3 _1269=abs(_1265)-vec3(0.5);vec3 _1276=_1265-floor(_1263+vec3(-0.5));vec3 _1528=_1554;_1528.x=(_1276.x*_1200)+(_1269.x*_1202);vec2 _1311=(_1276.yz*_1518.xz)+(_1269.yz*_1518.yw);vec3 _1530=_1528;_1530.y=_1311.x;_1532=_1530;_1532.z=_1311.y;_566=_1541+clamp(pow(abs(1.0-sqrt(_1547)),abs((dot((_1062*_1062)*(vec3(1.792842864990234375)-(((_1082*_1082)+(_1075*_1075))*0.8537347316741943359375)),_1512)*13000.0)+50.0))*mix((130.0*dot((_1256*_1256)*(vec3(1.792842864990234375)-(((_1276*_1276)+(_1269*_1269))*0.8537347316741943359375)),_1532))*u_particles.layers[_1540].position.z,0.0,min(1.0-clamp((v_puv.y+0.89999997615814208984375)*5.0,0.0,1.0),clamp((v_fuv.y-0.300000011920928955078125)*5.0,0.0,1.0))),0.0,1.0);}float _587=mix(_1541,0.0,smoothstep(u_particles.vignette.radius,u_particles.vignette.radius-u_particles.vignette.softness,length(v_uv-vec2(0.5)))*u_particles.vignette.strength);fragColor=vec4((vec3(min(v_color.x*6.666667938232421875,1.0),min(v_color.y*6.666667938232421875,1.0),min(v_color.z*6.666667938232421875,1.0))*_587)+(v_color*(1.0-_587)),1.0);}`;
var X, W, j, P, Z, N;
class Ct {
  constructor(e, s) {
    I(this, X, void 0);
    I(this, W, void 0);
    I(this, j, void 0);
    I(this, P, void 0);
    I(this, Z, void 0);
    I(this, N, void 0);
    L(this, X, { x: 0, y: 0 }),
      L(this, W, { x: 0, y: 0 }),
      L(this, j, { x: 0, y: 0 }),
      L(this, P, void 0),
      L(this, Z, { dx: 0, dy: 0 }),
      L(this, N, { dx: 0, dy: 0 }),
      (this.friction = e),
      (this.strength = s);
  }
  update(e) {
    A(this, P) || L(this, P, { x: e.x, y: e.y }),
      L(this, W, { x: e.x - A(this, P).x, y: e.y - A(this, P).y });
  }
  reset() {
    L(this, P, void 0);
  }
  get value() {
    return (
      L(this, Z, {
        dx: A(this, W).x - A(this, j).x,
        dy: A(this, W).y - A(this, j).y,
      }),
      L(this, N, {
        dx: A(this, N).dx * this.friction + A(this, Z).dx * this.strength,
        dy: A(this, N).dy * this.friction + A(this, Z).dy * this.strength,
      }),
      Math.hypot(A(this, N).dx, A(this, N).dy) < 0.1 &&
        L(this, N, { dx: 0, dy: 0 }),
      L(this, X, {
        x: A(this, X).x + A(this, N).dx,
        y: A(this, X).y + A(this, N).dy,
      }),
      L(this, j, A(this, W)),
      A(this, X)
    );
  }
}
(X = new WeakMap()),
  (W = new WeakMap()),
  (j = new WeakMap()),
  (P = new WeakMap()),
  (Z = new WeakMap()),
  (N = new WeakMap());
function Ne(t) {
  let e = t[0],
    s = t[1],
    i = t[2];
  return Math.sqrt(e * e + s * s + i * i);
}
function Ce(t, e) {
  return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
}
function St(t, e, s, i) {
  return (t[0] = e), (t[1] = s), (t[2] = i), t;
}
function De(t, e, s) {
  return (t[0] = e[0] + s[0]), (t[1] = e[1] + s[1]), (t[2] = e[2] + s[2]), t;
}
function Ve(t, e, s) {
  return (t[0] = e[0] - s[0]), (t[1] = e[1] - s[1]), (t[2] = e[2] - s[2]), t;
}
function Rt(t, e, s) {
  return (t[0] = e[0] * s[0]), (t[1] = e[1] * s[1]), (t[2] = e[2] * s[2]), t;
}
function Lt(t, e, s) {
  return (t[0] = e[0] / s[0]), (t[1] = e[1] / s[1]), (t[2] = e[2] / s[2]), t;
}
function ye(t, e, s) {
  return (t[0] = e[0] * s), (t[1] = e[1] * s), (t[2] = e[2] * s), t;
}
function Tt(t, e) {
  let s = e[0] - t[0],
    i = e[1] - t[1],
    r = e[2] - t[2];
  return Math.sqrt(s * s + i * i + r * r);
}
function Ot(t, e) {
  let s = e[0] - t[0],
    i = e[1] - t[1],
    r = e[2] - t[2];
  return s * s + i * i + r * r;
}
function Pe(t) {
  let e = t[0],
    s = t[1],
    i = t[2];
  return e * e + s * s + i * i;
}
function $t(t, e) {
  return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
}
function It(t, e) {
  return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
}
function Se(t, e) {
  let s = e[0],
    i = e[1],
    r = e[2],
    n = s * s + i * i + r * r;
  return (
    n > 0 && (n = 1 / Math.sqrt(n)),
    (t[0] = e[0] * n),
    (t[1] = e[1] * n),
    (t[2] = e[2] * n),
    t
  );
}
function ct(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
}
function qe(t, e, s) {
  let i = e[0],
    r = e[1],
    n = e[2],
    h = s[0],
    a = s[1],
    l = s[2];
  return (
    (t[0] = r * l - n * a), (t[1] = n * h - i * l), (t[2] = i * a - r * h), t
  );
}
function Bt(t, e, s, i) {
  let r = e[0],
    n = e[1],
    h = e[2];
  return (
    (t[0] = r + i * (s[0] - r)),
    (t[1] = n + i * (s[1] - n)),
    (t[2] = h + i * (s[2] - h)),
    t
  );
}
function Nt(t, e, s) {
  let i = e[0],
    r = e[1],
    n = e[2],
    h = s[3] * i + s[7] * r + s[11] * n + s[15];
  return (
    (h = h || 1),
    (t[0] = (s[0] * i + s[4] * r + s[8] * n + s[12]) / h),
    (t[1] = (s[1] * i + s[5] * r + s[9] * n + s[13]) / h),
    (t[2] = (s[2] * i + s[6] * r + s[10] * n + s[14]) / h),
    t
  );
}
function Dt(t, e, s) {
  let i = e[0],
    r = e[1],
    n = e[2],
    h = s[3] * i + s[7] * r + s[11] * n + s[15];
  return (
    (h = h || 1),
    (t[0] = (s[0] * i + s[4] * r + s[8] * n) / h),
    (t[1] = (s[1] * i + s[5] * r + s[9] * n) / h),
    (t[2] = (s[2] * i + s[6] * r + s[10] * n) / h),
    t
  );
}
function Vt(t, e, s) {
  let i = e[0],
    r = e[1],
    n = e[2];
  return (
    (t[0] = i * s[0] + r * s[3] + n * s[6]),
    (t[1] = i * s[1] + r * s[4] + n * s[7]),
    (t[2] = i * s[2] + r * s[5] + n * s[8]),
    t
  );
}
function Pt(t, e, s) {
  let i = e[0],
    r = e[1],
    n = e[2],
    h = s[0],
    a = s[1],
    l = s[2],
    c = s[3],
    f = a * n - l * r,
    o = l * i - h * n,
    d = h * r - a * i,
    _ = a * d - l * o,
    u = l * f - h * d,
    g = h * o - a * f,
    m = c * 2;
  return (
    (f *= m),
    (o *= m),
    (d *= m),
    (_ *= 2),
    (u *= 2),
    (g *= 2),
    (t[0] = i + f + _),
    (t[1] = r + o + u),
    (t[2] = n + d + g),
    t
  );
}
const qt = (function () {
  const t = [0, 0, 0],
    e = [0, 0, 0];
  return function (s, i) {
    Ce(t, s), Ce(e, i), Se(t, t), Se(e, e);
    let r = ct(t, e);
    return r > 1 ? 0 : r < -1 ? Math.PI : Math.acos(r);
  };
})();
function Ut(t, e) {
  return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
}
class D extends Array {
  constructor(e = 0, s = e, i = e) {
    return super(e, s, i), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(e) {
    this[0] = e;
  }
  set y(e) {
    this[1] = e;
  }
  set z(e) {
    this[2] = e;
  }
  set(e, s = e, i = e) {
    return e.length ? this.copy(e) : (St(this, e, s, i), this);
  }
  copy(e) {
    return Ce(this, e), this;
  }
  add(e, s) {
    return s ? De(this, e, s) : De(this, this, e), this;
  }
  sub(e, s) {
    return s ? Ve(this, e, s) : Ve(this, this, e), this;
  }
  multiply(e) {
    return e.length ? Rt(this, this, e) : ye(this, this, e), this;
  }
  divide(e) {
    return e.length ? Lt(this, this, e) : ye(this, this, 1 / e), this;
  }
  inverse(e = this) {
    return It(this, e), this;
  }
  len() {
    return Ne(this);
  }
  distance(e) {
    return e ? Tt(this, e) : Ne(this);
  }
  squaredLen() {
    return Pe(this);
  }
  squaredDistance(e) {
    return e ? Ot(this, e) : Pe(this);
  }
  negate(e = this) {
    return $t(this, e), this;
  }
  cross(e, s) {
    return s ? qe(this, e, s) : qe(this, this, e), this;
  }
  scale(e) {
    return ye(this, this, e), this;
  }
  normalize() {
    return Se(this, this), this;
  }
  dot(e) {
    return ct(this, e);
  }
  equals(e) {
    return Ut(this, e);
  }
  applyMatrix3(e) {
    return Vt(this, this, e), this;
  }
  applyMatrix4(e) {
    return Nt(this, this, e), this;
  }
  scaleRotateMatrix4(e) {
    return Dt(this, this, e), this;
  }
  applyQuaternion(e) {
    return Pt(this, this, e), this;
  }
  angle(e) {
    return qt(this, e);
  }
  lerp(e, s) {
    return Bt(this, this, e, s), this;
  }
  clone() {
    return new D(this[0], this[1], this[2]);
  }
  fromArray(e, s = 0) {
    return (this[0] = e[s]), (this[1] = e[s + 1]), (this[2] = e[s + 2]), this;
  }
  toArray(e = [], s = 0) {
    return (e[s] = this[0]), (e[s + 1] = this[1]), (e[s + 2] = this[2]), e;
  }
  transformDirection(e) {
    const s = this[0],
      i = this[1],
      r = this[2];
    return (
      (this[0] = e[0] * s + e[4] * i + e[8] * r),
      (this[1] = e[1] * s + e[5] * i + e[9] * r),
      (this[2] = e[2] * s + e[6] * i + e[10] * r),
      this.normalize()
    );
  }
}
const Ue = new D();
let kt = 1,
  Gt = 1,
  ke = !1;
class Xt {
  constructor(e, s = {}) {
    e.canvas || console.error("gl not passed as first argument to Geometry"),
      (this.gl = e),
      (this.attributes = s),
      (this.id = kt++),
      (this.VAOs = {}),
      (this.drawRange = { start: 0, count: 0 }),
      (this.instancedCount = 0),
      this.gl.renderer.bindVertexArray(null),
      (this.gl.renderer.currentGeometry = null),
      (this.glState = this.gl.renderer.state);
    for (let i in s) this.addAttribute(i, s[i]);
  }
  addAttribute(e, s) {
    if (
      ((this.attributes[e] = s),
      (s.id = Gt++),
      (s.size = s.size || 1),
      (s.type =
        s.type ||
        (s.data.constructor === Float32Array
          ? this.gl.FLOAT
          : s.data.constructor === Uint16Array
          ? this.gl.UNSIGNED_SHORT
          : this.gl.UNSIGNED_INT)),
      (s.target =
        e === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER),
      (s.normalized = s.normalized || !1),
      (s.stride = s.stride || 0),
      (s.offset = s.offset || 0),
      (s.count =
        s.count ||
        (s.stride ? s.data.byteLength / s.stride : s.data.length / s.size)),
      (s.divisor = s.instanced || 0),
      (s.needsUpdate = !1),
      (s.usage = s.usage || this.gl.STATIC_DRAW),
      s.buffer || this.updateAttribute(s),
      s.divisor)
    ) {
      if (
        ((this.isInstanced = !0),
        this.instancedCount && this.instancedCount !== s.count * s.divisor)
      )
        return (
          console.warn(
            "geometry has multiple instanced buffers of different length"
          ),
          (this.instancedCount = Math.min(
            this.instancedCount,
            s.count * s.divisor
          ))
        );
      this.instancedCount = s.count * s.divisor;
    } else
      e === "index"
        ? (this.drawRange.count = s.count)
        : this.attributes.index ||
          (this.drawRange.count = Math.max(this.drawRange.count, s.count));
  }
  updateAttribute(e) {
    const s = !e.buffer;
    s && (e.buffer = this.gl.createBuffer()),
      this.glState.boundBuffer !== e.buffer &&
        (this.gl.bindBuffer(e.target, e.buffer),
        (this.glState.boundBuffer = e.buffer)),
      s
        ? this.gl.bufferData(e.target, e.data, e.usage)
        : this.gl.bufferSubData(e.target, 0, e.data),
      (e.needsUpdate = !1);
  }
  setIndex(e) {
    this.addAttribute("index", e);
  }
  setDrawRange(e, s) {
    (this.drawRange.start = e), (this.drawRange.count = s);
  }
  setInstancedCount(e) {
    this.instancedCount = e;
  }
  createVAO(e) {
    (this.VAOs[e.attributeOrder] = this.gl.renderer.createVertexArray()),
      this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
      this.bindAttributes(e);
  }
  bindAttributes(e) {
    e.attributeLocations.forEach((s, { name: i, type: r }) => {
      if (!this.attributes[i]) {
        console.warn(`active attribute ${i} not being supplied`);
        return;
      }
      const n = this.attributes[i];
      this.gl.bindBuffer(n.target, n.buffer),
        (this.glState.boundBuffer = n.buffer);
      let h = 1;
      r === 35674 && (h = 2), r === 35675 && (h = 3), r === 35676 && (h = 4);
      const a = n.size / h,
        l = h === 1 ? 0 : h * h * h,
        c = h === 1 ? 0 : h * h;
      for (let f = 0; f < h; f++)
        this.gl.vertexAttribPointer(
          s + f,
          a,
          n.type,
          n.normalized,
          n.stride + l,
          n.offset + f * c
        ),
          this.gl.enableVertexAttribArray(s + f),
          this.gl.renderer.vertexAttribDivisor(s + f, n.divisor);
    }),
      this.attributes.index &&
        this.gl.bindBuffer(
          this.gl.ELEMENT_ARRAY_BUFFER,
          this.attributes.index.buffer
        );
  }
  draw({ program: e, mode: s = this.gl.TRIANGLES }) {
    this.gl.renderer.currentGeometry !== `${this.id}_${e.attributeOrder}` &&
      (this.VAOs[e.attributeOrder] || this.createVAO(e),
      this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
      (this.gl.renderer.currentGeometry = `${this.id}_${e.attributeOrder}`)),
      e.attributeLocations.forEach((i, { name: r }) => {
        const n = this.attributes[r];
        n.needsUpdate && this.updateAttribute(n);
      }),
      this.isInstanced
        ? this.attributes.index
          ? this.gl.renderer.drawElementsInstanced(
              s,
              this.drawRange.count,
              this.attributes.index.type,
              this.attributes.index.offset + this.drawRange.start * 2,
              this.instancedCount
            )
          : this.gl.renderer.drawArraysInstanced(
              s,
              this.drawRange.start,
              this.drawRange.count,
              this.instancedCount
            )
        : this.attributes.index
        ? this.gl.drawElements(
            s,
            this.drawRange.count,
            this.attributes.index.type,
            this.attributes.index.offset + this.drawRange.start * 2
          )
        : this.gl.drawArrays(s, this.drawRange.start, this.drawRange.count);
  }
  getPosition() {
    const e = this.attributes.position;
    if (e.data) return e;
    if (!ke)
      return (
        console.warn("No position buffer data found to compute bounds"),
        (ke = !0)
      );
  }
  computeBoundingBox(e) {
    e || (e = this.getPosition());
    const s = e.data,
      i = e.stride ? e.stride / s.BYTES_PER_ELEMENT : e.size;
    this.bounds ||
      (this.bounds = {
        min: new D(),
        max: new D(),
        center: new D(),
        scale: new D(),
        radius: 1 / 0,
      });
    const r = this.bounds.min,
      n = this.bounds.max,
      h = this.bounds.center,
      a = this.bounds.scale;
    r.set(1 / 0), n.set(-1 / 0);
    for (let l = 0, c = s.length; l < c; l += i) {
      const f = s[l],
        o = s[l + 1],
        d = s[l + 2];
      (r.x = Math.min(f, r.x)),
        (r.y = Math.min(o, r.y)),
        (r.z = Math.min(d, r.z)),
        (n.x = Math.max(f, n.x)),
        (n.y = Math.max(o, n.y)),
        (n.z = Math.max(d, n.z));
    }
    a.sub(n, r), h.add(r, n).divide(2);
  }
  computeBoundingSphere(e) {
    e || (e = this.getPosition());
    const s = e.data,
      i = e.stride ? e.stride / s.BYTES_PER_ELEMENT : e.size;
    this.bounds || this.computeBoundingBox(e);
    let r = 0;
    for (let n = 0, h = s.length; n < h; n += i)
      Ue.fromArray(s, n),
        (r = Math.max(r, this.bounds.center.squaredDistance(Ue)));
    this.bounds.radius = Math.sqrt(r);
  }
  remove() {
    for (let e in this.VAOs)
      this.gl.renderer.deleteVertexArray(this.VAOs[e]), delete this.VAOs[e];
    for (let e in this.attributes)
      this.gl.deleteBuffer(this.attributes[e].buffer),
        delete this.attributes[e];
  }
}
let Wt = 1;
const Ge = {};
class Yt {
  constructor(
    e,
    {
      vertex: s,
      fragment: i,
      uniforms: r = {},
      transparent: n = !1,
      cullFace: h = e.BACK,
      frontFace: a = e.CCW,
      depthTest: l = !0,
      depthWrite: c = !0,
      depthFunc: f = e.LESS,
    } = {}
  ) {
    e.canvas || console.error("gl not passed as fist argument to Program"),
      (this.gl = e),
      (this.uniforms = r),
      (this.id = Wt++),
      s || console.warn("vertex shader not supplied"),
      i || console.warn("fragment shader not supplied"),
      (this.transparent = n),
      (this.cullFace = h),
      (this.frontFace = a),
      (this.depthTest = l),
      (this.depthWrite = c),
      (this.depthFunc = f),
      (this.blendFunc = {}),
      (this.blendEquation = {}),
      this.transparent &&
        !this.blendFunc.src &&
        (this.gl.renderer.premultipliedAlpha
          ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
          : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
    const o = e.createShader(e.VERTEX_SHADER);
    e.shaderSource(o, s),
      e.compileShader(o),
      e.getShaderInfoLog(o) !== "" &&
        console.warn(`${e.getShaderInfoLog(o)}
Vertex Shader
${Xe(s)}`);
    const d = e.createShader(e.FRAGMENT_SHADER);
    if (
      (e.shaderSource(d, i),
      e.compileShader(d),
      e.getShaderInfoLog(d) !== "" &&
        console.warn(`${e.getShaderInfoLog(d)}
Fragment Shader
${Xe(i)}`),
      (this.program = e.createProgram()),
      e.attachShader(this.program, o),
      e.attachShader(this.program, d),
      e.linkProgram(this.program),
      !e.getProgramParameter(this.program, e.LINK_STATUS))
    )
      return console.warn(e.getProgramInfoLog(this.program));
    e.deleteShader(o), e.deleteShader(d), (this.uniformLocations = new Map());
    let _ = e.getProgramParameter(this.program, e.ACTIVE_UNIFORMS);
    for (let m = 0; m < _; m++) {
      let p = e.getActiveUniform(this.program, m);
      this.uniformLocations.set(p, e.getUniformLocation(this.program, p.name));
      const w = p.name.match(/(\w+)/g);
      (p.uniformName = w[0]), (p.nameComponents = w.slice(1));
    }
    this.attributeLocations = new Map();
    const u = [],
      g = e.getProgramParameter(this.program, e.ACTIVE_ATTRIBUTES);
    for (let m = 0; m < g; m++) {
      const p = e.getActiveAttrib(this.program, m),
        w = e.getAttribLocation(this.program, p.name);
      (u[w] = p.name), this.attributeLocations.set(p, w);
    }
    this.attributeOrder = u.join("");
  }
  setBlendFunc(e, s, i, r) {
    (this.blendFunc.src = e),
      (this.blendFunc.dst = s),
      (this.blendFunc.srcAlpha = i),
      (this.blendFunc.dstAlpha = r),
      e && (this.transparent = !0);
  }
  setBlendEquation(e, s) {
    (this.blendEquation.modeRGB = e), (this.blendEquation.modeAlpha = s);
  }
  applyState() {
    this.depthTest
      ? this.gl.renderer.enable(this.gl.DEPTH_TEST)
      : this.gl.renderer.disable(this.gl.DEPTH_TEST),
      this.cullFace
        ? this.gl.renderer.enable(this.gl.CULL_FACE)
        : this.gl.renderer.disable(this.gl.CULL_FACE),
      this.blendFunc.src
        ? this.gl.renderer.enable(this.gl.BLEND)
        : this.gl.renderer.disable(this.gl.BLEND),
      this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
      this.gl.renderer.setFrontFace(this.frontFace),
      this.gl.renderer.setDepthMask(this.depthWrite),
      this.gl.renderer.setDepthFunc(this.depthFunc),
      this.blendFunc.src &&
        this.gl.renderer.setBlendFunc(
          this.blendFunc.src,
          this.blendFunc.dst,
          this.blendFunc.srcAlpha,
          this.blendFunc.dstAlpha
        ),
      this.gl.renderer.setBlendEquation(
        this.blendEquation.modeRGB,
        this.blendEquation.modeAlpha
      );
  }
  use({ flipFaces: e = !1 } = {}) {
    let s = -1;
    this.gl.renderer.currentProgram === this.id ||
      (this.gl.useProgram(this.program),
      (this.gl.renderer.currentProgram = this.id)),
      this.uniformLocations.forEach((r, n) => {
        let h = this.uniforms[n.uniformName];
        for (const a of n.nameComponents)
          if (h && a in h) h = h[a];
          else {
            h = void 0;
            break;
          }
        if (!h) return We(`Active uniform ${n.name} has not been supplied`);
        if (h && h.value === void 0)
          return We(`${n.name} uniform is missing a value parameter`);
        if (h.value.texture)
          return (s = s + 1), h.value.update(s), be(this.gl, n.type, r, s);
        if (h.value.length && h.value[0].texture) {
          const a = [];
          return (
            h.value.forEach((l) => {
              (s = s + 1), l.update(s), a.push(s);
            }),
            be(this.gl, n.type, r, a)
          );
        }
        be(this.gl, n.type, r, h.value);
      }),
      this.applyState(),
      e &&
        this.gl.renderer.setFrontFace(
          this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW
        );
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function be(t, e, s, i) {
  i = i.length ? jt(i) : i;
  const r = t.renderer.state.uniformLocations.get(s);
  if (i.length)
    if (r === void 0 || r.length !== i.length)
      t.renderer.state.uniformLocations.set(s, i.slice(0));
    else {
      if (Zt(r, i)) return;
      r.set ? r.set(i) : Ht(r, i), t.renderer.state.uniformLocations.set(s, r);
    }
  else {
    if (r === i) return;
    t.renderer.state.uniformLocations.set(s, i);
  }
  switch (e) {
    case 5126:
      return i.length ? t.uniform1fv(s, i) : t.uniform1f(s, i);
    case 35664:
      return t.uniform2fv(s, i);
    case 35665:
      return t.uniform3fv(s, i);
    case 35666:
      return t.uniform4fv(s, i);
    case 35670:
    case 5124:
    case 35678:
    case 35680:
      return i.length ? t.uniform1iv(s, i) : t.uniform1i(s, i);
    case 35671:
    case 35667:
      return t.uniform2iv(s, i);
    case 35672:
    case 35668:
      return t.uniform3iv(s, i);
    case 35673:
    case 35669:
      return t.uniform4iv(s, i);
    case 35674:
      return t.uniformMatrix2fv(s, !1, i);
    case 35675:
      return t.uniformMatrix3fv(s, !1, i);
    case 35676:
      return t.uniformMatrix4fv(s, !1, i);
  }
}
function Xe(t) {
  let e = t.split(`
`);
  for (let s = 0; s < e.length; s++) e[s] = s + 1 + ": " + e[s];
  return e.join(`
`);
}
function jt(t) {
  const e = t.length,
    s = t[0].length;
  if (s === void 0) return t;
  const i = e * s;
  let r = Ge[i];
  r || (Ge[i] = r = new Float32Array(i));
  for (let n = 0; n < e; n++) r.set(t[n], n * s);
  return r;
}
function Zt(t, e) {
  if (t.length !== e.length) return !1;
  for (let s = 0, i = t.length; s < i; s++) if (t[s] !== e[s]) return !1;
  return !0;
}
function Ht(t, e) {
  for (let s = 0, i = t.length; s < i; s++) t[s] = e[s];
}
let we = 0;
function We(t) {
  we > 100 ||
    (console.warn(t),
    we++,
    we > 100 &&
      console.warn("More than 100 program warnings - stopping logs."));
}
const Me = new D();
let Qt = 1;
class Kt {
  constructor({
    canvas: e = document.createElement("canvas"),
    width: s = 300,
    height: i = 150,
    dpr: r = 1,
    alpha: n = !1,
    depth: h = !0,
    stencil: a = !1,
    antialias: l = !1,
    premultipliedAlpha: c = !1,
    preserveDrawingBuffer: f = !1,
    powerPreference: o = "default",
    autoClear: d = !0,
    webgl: _ = 2,
  } = {}) {
    const u = {
      alpha: n,
      depth: h,
      stencil: a,
      antialias: l,
      premultipliedAlpha: c,
      preserveDrawingBuffer: f,
      powerPreference: o,
    };
    (this.dpr = r),
      (this.alpha = n),
      (this.color = !0),
      (this.depth = h),
      (this.stencil = a),
      (this.premultipliedAlpha = c),
      (this.autoClear = d),
      (this.id = Qt++),
      _ === 2 && (this.gl = e.getContext("webgl2", u)),
      (this.isWebgl2 = !!this.gl),
      this.gl || (this.gl = e.getContext("webgl", u)),
      this.gl || console.error("unable to create webgl context"),
      (this.gl.renderer = this),
      this.setSize(s, i),
      (this.state = {}),
      (this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }),
      (this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }),
      (this.state.cullFace = null),
      (this.state.frontFace = this.gl.CCW),
      (this.state.depthMask = !0),
      (this.state.depthFunc = this.gl.LESS),
      (this.state.premultiplyAlpha = !1),
      (this.state.flipY = !1),
      (this.state.unpackAlignment = 4),
      (this.state.framebuffer = null),
      (this.state.viewport = { x: 0, y: 0, width: null, height: null }),
      (this.state.textureUnits = []),
      (this.state.activeTextureUnit = 0),
      (this.state.boundBuffer = null),
      (this.state.uniformLocations = new Map()),
      (this.extensions = {}),
      this.isWebgl2
        ? (this.getExtension("EXT_color_buffer_float"),
          this.getExtension("OES_texture_float_linear"))
        : (this.getExtension("OES_texture_float"),
          this.getExtension("OES_texture_float_linear"),
          this.getExtension("OES_texture_half_float"),
          this.getExtension("OES_texture_half_float_linear"),
          this.getExtension("OES_element_index_uint"),
          this.getExtension("OES_standard_derivatives"),
          this.getExtension("EXT_sRGB"),
          this.getExtension("WEBGL_depth_texture"),
          this.getExtension("WEBGL_draw_buffers")),
      this.getExtension("WEBGL_compressed_texture_astc"),
      this.getExtension("EXT_texture_compression_bptc"),
      this.getExtension("WEBGL_compressed_texture_s3tc"),
      this.getExtension("WEBGL_compressed_texture_etc1"),
      this.getExtension("WEBGL_compressed_texture_pvrtc"),
      this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
      (this.vertexAttribDivisor = this.getExtension(
        "ANGLE_instanced_arrays",
        "vertexAttribDivisor",
        "vertexAttribDivisorANGLE"
      )),
      (this.drawArraysInstanced = this.getExtension(
        "ANGLE_instanced_arrays",
        "drawArraysInstanced",
        "drawArraysInstancedANGLE"
      )),
      (this.drawElementsInstanced = this.getExtension(
        "ANGLE_instanced_arrays",
        "drawElementsInstanced",
        "drawElementsInstancedANGLE"
      )),
      (this.createVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "createVertexArray",
        "createVertexArrayOES"
      )),
      (this.bindVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "bindVertexArray",
        "bindVertexArrayOES"
      )),
      (this.deleteVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "deleteVertexArray",
        "deleteVertexArrayOES"
      )),
      (this.drawBuffers = this.getExtension(
        "WEBGL_draw_buffers",
        "drawBuffers",
        "drawBuffersWEBGL"
      )),
      (this.parameters = {}),
      (this.parameters.maxTextureUnits = this.gl.getParameter(
        this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS
      )),
      (this.parameters.maxAnisotropy = this.getExtension(
        "EXT_texture_filter_anisotropic"
      )
        ? this.gl.getParameter(
            this.getExtension("EXT_texture_filter_anisotropic")
              .MAX_TEXTURE_MAX_ANISOTROPY_EXT
          )
        : 0);
  }
  setSize(e, s) {
    (this.width = e),
      (this.height = s),
      (this.gl.canvas.width = e * this.dpr),
      (this.gl.canvas.height = s * this.dpr),
      Object.assign(this.gl.canvas.style, {
        width: e + "px",
        height: s + "px",
      });
  }
  setViewport(e, s, i = 0, r = 0) {
    (this.state.viewport.width === e && this.state.viewport.height === s) ||
      ((this.state.viewport.width = e),
      (this.state.viewport.height = s),
      (this.state.viewport.x = i),
      (this.state.viewport.y = r),
      this.gl.viewport(i, r, e, s));
  }
  setScissor(e, s, i = 0, r = 0) {
    this.gl.scissor(i, r, e, s);
  }
  enable(e) {
    this.state[e] !== !0 && (this.gl.enable(e), (this.state[e] = !0));
  }
  disable(e) {
    this.state[e] !== !1 && (this.gl.disable(e), (this.state[e] = !1));
  }
  setBlendFunc(e, s, i, r) {
    (this.state.blendFunc.src === e &&
      this.state.blendFunc.dst === s &&
      this.state.blendFunc.srcAlpha === i &&
      this.state.blendFunc.dstAlpha === r) ||
      ((this.state.blendFunc.src = e),
      (this.state.blendFunc.dst = s),
      (this.state.blendFunc.srcAlpha = i),
      (this.state.blendFunc.dstAlpha = r),
      i !== void 0
        ? this.gl.blendFuncSeparate(e, s, i, r)
        : this.gl.blendFunc(e, s));
  }
  setBlendEquation(e, s) {
    (e = e || this.gl.FUNC_ADD),
      !(
        this.state.blendEquation.modeRGB === e &&
        this.state.blendEquation.modeAlpha === s
      ) &&
        ((this.state.blendEquation.modeRGB = e),
        (this.state.blendEquation.modeAlpha = s),
        s !== void 0
          ? this.gl.blendEquationSeparate(e, s)
          : this.gl.blendEquation(e));
  }
  setCullFace(e) {
    this.state.cullFace !== e &&
      ((this.state.cullFace = e), this.gl.cullFace(e));
  }
  setFrontFace(e) {
    this.state.frontFace !== e &&
      ((this.state.frontFace = e), this.gl.frontFace(e));
  }
  setDepthMask(e) {
    this.state.depthMask !== e &&
      ((this.state.depthMask = e), this.gl.depthMask(e));
  }
  setDepthFunc(e) {
    this.state.depthFunc !== e &&
      ((this.state.depthFunc = e), this.gl.depthFunc(e));
  }
  activeTexture(e) {
    this.state.activeTextureUnit !== e &&
      ((this.state.activeTextureUnit = e),
      this.gl.activeTexture(this.gl.TEXTURE0 + e));
  }
  bindFramebuffer({ target: e = this.gl.FRAMEBUFFER, buffer: s = null } = {}) {
    this.state.framebuffer !== s &&
      ((this.state.framebuffer = s), this.gl.bindFramebuffer(e, s));
  }
  getExtension(e, s, i) {
    return s && this.gl[s]
      ? this.gl[s].bind(this.gl)
      : (this.extensions[e] || (this.extensions[e] = this.gl.getExtension(e)),
        s
          ? this.extensions[e]
            ? this.extensions[e][i].bind(this.extensions[e])
            : null
          : this.extensions[e]);
  }
  sortOpaque(e, s) {
    return e.renderOrder !== s.renderOrder
      ? e.renderOrder - s.renderOrder
      : e.program.id !== s.program.id
      ? e.program.id - s.program.id
      : e.zDepth !== s.zDepth
      ? e.zDepth - s.zDepth
      : s.id - e.id;
  }
  sortTransparent(e, s) {
    return e.renderOrder !== s.renderOrder
      ? e.renderOrder - s.renderOrder
      : e.zDepth !== s.zDepth
      ? s.zDepth - e.zDepth
      : s.id - e.id;
  }
  sortUI(e, s) {
    return e.renderOrder !== s.renderOrder
      ? e.renderOrder - s.renderOrder
      : e.program.id !== s.program.id
      ? e.program.id - s.program.id
      : s.id - e.id;
  }
  getRenderList({ scene: e, camera: s, frustumCull: i, sort: r }) {
    let n = [];
    if (
      (s && i && s.updateFrustum(),
      e.traverse((h) => {
        if (!h.visible) return !0;
        !h.draw ||
          (i && h.frustumCulled && s && !s.frustumIntersectsMesh(h)) ||
          n.push(h);
      }),
      r)
    ) {
      const h = [],
        a = [],
        l = [];
      n.forEach((c) => {
        c.program.transparent
          ? c.program.depthTest
            ? a.push(c)
            : l.push(c)
          : h.push(c),
          (c.zDepth = 0),
          !(c.renderOrder !== 0 || !c.program.depthTest || !s) &&
            (c.worldMatrix.getTranslation(Me),
            Me.applyMatrix4(s.projectionViewMatrix),
            (c.zDepth = Me.z));
      }),
        h.sort(this.sortOpaque),
        a.sort(this.sortTransparent),
        l.sort(this.sortUI),
        (n = h.concat(a, l));
    }
    return n;
  }
  render({
    scene: e,
    camera: s,
    target: i = null,
    update: r = !0,
    sort: n = !0,
    frustumCull: h = !0,
    clear: a,
  }) {
    i === null
      ? (this.bindFramebuffer(),
        this.setViewport(this.width * this.dpr, this.height * this.dpr))
      : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)),
      (a || (this.autoClear && a !== !1)) &&
        (this.depth &&
          (!i || i.depth) &&
          (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
        this.gl.clear(
          (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
            (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
            (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
        )),
      r && e.updateMatrixWorld(),
      s && s.updateMatrixWorld(),
      this.getRenderList({
        scene: e,
        camera: s,
        frustumCull: h,
        sort: n,
      }).forEach((c) => {
        c.draw({ camera: s });
      });
  }
}
function Jt(t, e) {
  return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
}
function es(t, e, s, i, r) {
  return (t[0] = e), (t[1] = s), (t[2] = i), (t[3] = r), t;
}
function ts(t, e) {
  let s = e[0],
    i = e[1],
    r = e[2],
    n = e[3],
    h = s * s + i * i + r * r + n * n;
  return (
    h > 0 && (h = 1 / Math.sqrt(h)),
    (t[0] = s * h),
    (t[1] = i * h),
    (t[2] = r * h),
    (t[3] = n * h),
    t
  );
}
function ss(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
}
function is(t) {
  return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
}
function rs(t, e, s) {
  s = s * 0.5;
  let i = Math.sin(s);
  return (
    (t[0] = i * e[0]),
    (t[1] = i * e[1]),
    (t[2] = i * e[2]),
    (t[3] = Math.cos(s)),
    t
  );
}
function Ye(t, e, s) {
  let i = e[0],
    r = e[1],
    n = e[2],
    h = e[3],
    a = s[0],
    l = s[1],
    c = s[2],
    f = s[3];
  return (
    (t[0] = i * f + h * a + r * c - n * l),
    (t[1] = r * f + h * l + n * a - i * c),
    (t[2] = n * f + h * c + i * l - r * a),
    (t[3] = h * f - i * a - r * l - n * c),
    t
  );
}
function ns(t, e, s) {
  s *= 0.5;
  let i = e[0],
    r = e[1],
    n = e[2],
    h = e[3],
    a = Math.sin(s),
    l = Math.cos(s);
  return (
    (t[0] = i * l + h * a),
    (t[1] = r * l + n * a),
    (t[2] = n * l - r * a),
    (t[3] = h * l - i * a),
    t
  );
}
function hs(t, e, s) {
  s *= 0.5;
  let i = e[0],
    r = e[1],
    n = e[2],
    h = e[3],
    a = Math.sin(s),
    l = Math.cos(s);
  return (
    (t[0] = i * l - n * a),
    (t[1] = r * l + h * a),
    (t[2] = n * l + i * a),
    (t[3] = h * l - r * a),
    t
  );
}
function ls(t, e, s) {
  s *= 0.5;
  let i = e[0],
    r = e[1],
    n = e[2],
    h = e[3],
    a = Math.sin(s),
    l = Math.cos(s);
  return (
    (t[0] = i * l + r * a),
    (t[1] = r * l - i * a),
    (t[2] = n * l + h * a),
    (t[3] = h * l - n * a),
    t
  );
}
function as(t, e, s, i) {
  let r = e[0],
    n = e[1],
    h = e[2],
    a = e[3],
    l = s[0],
    c = s[1],
    f = s[2],
    o = s[3],
    d,
    _,
    u,
    g,
    m;
  return (
    (_ = r * l + n * c + h * f + a * o),
    _ < 0 && ((_ = -_), (l = -l), (c = -c), (f = -f), (o = -o)),
    1 - _ > 1e-6
      ? ((d = Math.acos(_)),
        (u = Math.sin(d)),
        (g = Math.sin((1 - i) * d) / u),
        (m = Math.sin(i * d) / u))
      : ((g = 1 - i), (m = i)),
    (t[0] = g * r + m * l),
    (t[1] = g * n + m * c),
    (t[2] = g * h + m * f),
    (t[3] = g * a + m * o),
    t
  );
}
function cs(t, e) {
  let s = e[0],
    i = e[1],
    r = e[2],
    n = e[3],
    h = s * s + i * i + r * r + n * n,
    a = h ? 1 / h : 0;
  return (t[0] = -s * a), (t[1] = -i * a), (t[2] = -r * a), (t[3] = n * a), t;
}
function fs(t, e) {
  return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = e[3]), t;
}
function os(t, e) {
  let s = e[0] + e[4] + e[8],
    i;
  if (s > 0)
    (i = Math.sqrt(s + 1)),
      (t[3] = 0.5 * i),
      (i = 0.5 / i),
      (t[0] = (e[5] - e[7]) * i),
      (t[1] = (e[6] - e[2]) * i),
      (t[2] = (e[1] - e[3]) * i);
  else {
    let r = 0;
    e[4] > e[0] && (r = 1), e[8] > e[r * 3 + r] && (r = 2);
    let n = (r + 1) % 3,
      h = (r + 2) % 3;
    (i = Math.sqrt(e[r * 3 + r] - e[n * 3 + n] - e[h * 3 + h] + 1)),
      (t[r] = 0.5 * i),
      (i = 0.5 / i),
      (t[3] = (e[n * 3 + h] - e[h * 3 + n]) * i),
      (t[n] = (e[n * 3 + r] + e[r * 3 + n]) * i),
      (t[h] = (e[h * 3 + r] + e[r * 3 + h]) * i);
  }
  return t;
}
function ds(t, e, s = "YXZ") {
  let i = Math.sin(e[0] * 0.5),
    r = Math.cos(e[0] * 0.5),
    n = Math.sin(e[1] * 0.5),
    h = Math.cos(e[1] * 0.5),
    a = Math.sin(e[2] * 0.5),
    l = Math.cos(e[2] * 0.5);
  return (
    s === "XYZ"
      ? ((t[0] = i * h * l + r * n * a),
        (t[1] = r * n * l - i * h * a),
        (t[2] = r * h * a + i * n * l),
        (t[3] = r * h * l - i * n * a))
      : s === "YXZ"
      ? ((t[0] = i * h * l + r * n * a),
        (t[1] = r * n * l - i * h * a),
        (t[2] = r * h * a - i * n * l),
        (t[3] = r * h * l + i * n * a))
      : s === "ZXY"
      ? ((t[0] = i * h * l - r * n * a),
        (t[1] = r * n * l + i * h * a),
        (t[2] = r * h * a + i * n * l),
        (t[3] = r * h * l - i * n * a))
      : s === "ZYX"
      ? ((t[0] = i * h * l - r * n * a),
        (t[1] = r * n * l + i * h * a),
        (t[2] = r * h * a - i * n * l),
        (t[3] = r * h * l + i * n * a))
      : s === "YZX"
      ? ((t[0] = i * h * l + r * n * a),
        (t[1] = r * n * l + i * h * a),
        (t[2] = r * h * a - i * n * l),
        (t[3] = r * h * l - i * n * a))
      : s === "XZY" &&
        ((t[0] = i * h * l - r * n * a),
        (t[1] = r * n * l - i * h * a),
        (t[2] = r * h * a + i * n * l),
        (t[3] = r * h * l + i * n * a)),
    t
  );
}
const _s = Jt,
  us = es,
  ps = ss,
  gs = ts;
class ms extends Array {
  constructor(e = 0, s = 0, i = 0, r = 1) {
    return super(e, s, i, r), (this.onChange = () => {}), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(e) {
    (this[0] = e), this.onChange();
  }
  set y(e) {
    (this[1] = e), this.onChange();
  }
  set z(e) {
    (this[2] = e), this.onChange();
  }
  set w(e) {
    (this[3] = e), this.onChange();
  }
  identity() {
    return is(this), this.onChange(), this;
  }
  set(e, s, i, r) {
    return e.length
      ? this.copy(e)
      : (us(this, e, s, i, r), this.onChange(), this);
  }
  rotateX(e) {
    return ns(this, this, e), this.onChange(), this;
  }
  rotateY(e) {
    return hs(this, this, e), this.onChange(), this;
  }
  rotateZ(e) {
    return ls(this, this, e), this.onChange(), this;
  }
  inverse(e = this) {
    return cs(this, e), this.onChange(), this;
  }
  conjugate(e = this) {
    return fs(this, e), this.onChange(), this;
  }
  copy(e) {
    return _s(this, e), this.onChange(), this;
  }
  normalize(e = this) {
    return gs(this, e), this.onChange(), this;
  }
  multiply(e, s) {
    return s ? Ye(this, e, s) : Ye(this, this, e), this.onChange(), this;
  }
  dot(e) {
    return ps(this, e);
  }
  fromMatrix3(e) {
    return os(this, e), this.onChange(), this;
  }
  fromEuler(e) {
    return ds(this, e, e.order), this;
  }
  fromAxisAngle(e, s) {
    return rs(this, e, s), this;
  }
  slerp(e, s) {
    return as(this, this, e, s), this;
  }
  fromArray(e, s = 0) {
    return (
      (this[0] = e[s]),
      (this[1] = e[s + 1]),
      (this[2] = e[s + 2]),
      (this[3] = e[s + 3]),
      this
    );
  }
  toArray(e = [], s = 0) {
    return (
      (e[s] = this[0]),
      (e[s + 1] = this[1]),
      (e[s + 2] = this[2]),
      (e[s + 3] = this[3]),
      e
    );
  }
}
const vs = 1e-6;
function xs(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[3]),
    (t[4] = e[4]),
    (t[5] = e[5]),
    (t[6] = e[6]),
    (t[7] = e[7]),
    (t[8] = e[8]),
    (t[9] = e[9]),
    (t[10] = e[10]),
    (t[11] = e[11]),
    (t[12] = e[12]),
    (t[13] = e[13]),
    (t[14] = e[14]),
    (t[15] = e[15]),
    t
  );
}
function ys(t, e, s, i, r, n, h, a, l, c, f, o, d, _, u, g, m) {
  return (
    (t[0] = e),
    (t[1] = s),
    (t[2] = i),
    (t[3] = r),
    (t[4] = n),
    (t[5] = h),
    (t[6] = a),
    (t[7] = l),
    (t[8] = c),
    (t[9] = f),
    (t[10] = o),
    (t[11] = d),
    (t[12] = _),
    (t[13] = u),
    (t[14] = g),
    (t[15] = m),
    t
  );
}
function bs(t) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = 1),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 1),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function ws(t, e) {
  let s = e[0],
    i = e[1],
    r = e[2],
    n = e[3],
    h = e[4],
    a = e[5],
    l = e[6],
    c = e[7],
    f = e[8],
    o = e[9],
    d = e[10],
    _ = e[11],
    u = e[12],
    g = e[13],
    m = e[14],
    p = e[15],
    w = s * a - i * h,
    y = s * l - r * h,
    v = s * c - n * h,
    b = i * l - r * a,
    x = i * c - n * a,
    z = r * c - n * l,
    F = f * g - o * u,
    E = f * m - d * u,
    C = f * p - _ * u,
    S = o * m - d * g,
    R = o * p - _ * g,
    O = d * p - _ * m,
    M = w * O - y * R + v * S + b * C - x * E + z * F;
  return M
    ? ((M = 1 / M),
      (t[0] = (a * O - l * R + c * S) * M),
      (t[1] = (r * R - i * O - n * S) * M),
      (t[2] = (g * z - m * x + p * b) * M),
      (t[3] = (d * x - o * z - _ * b) * M),
      (t[4] = (l * C - h * O - c * E) * M),
      (t[5] = (s * O - r * C + n * E) * M),
      (t[6] = (m * v - u * z - p * y) * M),
      (t[7] = (f * z - d * v + _ * y) * M),
      (t[8] = (h * R - a * C + c * F) * M),
      (t[9] = (i * C - s * R - n * F) * M),
      (t[10] = (u * x - g * v + p * w) * M),
      (t[11] = (o * v - f * x - _ * w) * M),
      (t[12] = (a * E - h * S - l * F) * M),
      (t[13] = (s * S - i * E + r * F) * M),
      (t[14] = (g * y - u * b - m * w) * M),
      (t[15] = (f * b - o * y + d * w) * M),
      t)
    : null;
}
function Ms(t) {
  let e = t[0],
    s = t[1],
    i = t[2],
    r = t[3],
    n = t[4],
    h = t[5],
    a = t[6],
    l = t[7],
    c = t[8],
    f = t[9],
    o = t[10],
    d = t[11],
    _ = t[12],
    u = t[13],
    g = t[14],
    m = t[15],
    p = e * h - s * n,
    w = e * a - i * n,
    y = e * l - r * n,
    v = s * a - i * h,
    b = s * l - r * h,
    x = i * l - r * a,
    z = c * u - f * _,
    F = c * g - o * _,
    E = c * m - d * _,
    C = f * g - o * u,
    S = f * m - d * u,
    R = o * m - d * g;
  return p * R - w * S + y * C + v * E - b * F + x * z;
}
function je(t, e, s) {
  let i = e[0],
    r = e[1],
    n = e[2],
    h = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    f = e[7],
    o = e[8],
    d = e[9],
    _ = e[10],
    u = e[11],
    g = e[12],
    m = e[13],
    p = e[14],
    w = e[15],
    y = s[0],
    v = s[1],
    b = s[2],
    x = s[3];
  return (
    (t[0] = y * i + v * a + b * o + x * g),
    (t[1] = y * r + v * l + b * d + x * m),
    (t[2] = y * n + v * c + b * _ + x * p),
    (t[3] = y * h + v * f + b * u + x * w),
    (y = s[4]),
    (v = s[5]),
    (b = s[6]),
    (x = s[7]),
    (t[4] = y * i + v * a + b * o + x * g),
    (t[5] = y * r + v * l + b * d + x * m),
    (t[6] = y * n + v * c + b * _ + x * p),
    (t[7] = y * h + v * f + b * u + x * w),
    (y = s[8]),
    (v = s[9]),
    (b = s[10]),
    (x = s[11]),
    (t[8] = y * i + v * a + b * o + x * g),
    (t[9] = y * r + v * l + b * d + x * m),
    (t[10] = y * n + v * c + b * _ + x * p),
    (t[11] = y * h + v * f + b * u + x * w),
    (y = s[12]),
    (v = s[13]),
    (b = s[14]),
    (x = s[15]),
    (t[12] = y * i + v * a + b * o + x * g),
    (t[13] = y * r + v * l + b * d + x * m),
    (t[14] = y * n + v * c + b * _ + x * p),
    (t[15] = y * h + v * f + b * u + x * w),
    t
  );
}
function Es(t, e, s) {
  let i = s[0],
    r = s[1],
    n = s[2],
    h,
    a,
    l,
    c,
    f,
    o,
    d,
    _,
    u,
    g,
    m,
    p;
  return (
    e === t
      ? ((t[12] = e[0] * i + e[4] * r + e[8] * n + e[12]),
        (t[13] = e[1] * i + e[5] * r + e[9] * n + e[13]),
        (t[14] = e[2] * i + e[6] * r + e[10] * n + e[14]),
        (t[15] = e[3] * i + e[7] * r + e[11] * n + e[15]))
      : ((h = e[0]),
        (a = e[1]),
        (l = e[2]),
        (c = e[3]),
        (f = e[4]),
        (o = e[5]),
        (d = e[6]),
        (_ = e[7]),
        (u = e[8]),
        (g = e[9]),
        (m = e[10]),
        (p = e[11]),
        (t[0] = h),
        (t[1] = a),
        (t[2] = l),
        (t[3] = c),
        (t[4] = f),
        (t[5] = o),
        (t[6] = d),
        (t[7] = _),
        (t[8] = u),
        (t[9] = g),
        (t[10] = m),
        (t[11] = p),
        (t[12] = h * i + f * r + u * n + e[12]),
        (t[13] = a * i + o * r + g * n + e[13]),
        (t[14] = l * i + d * r + m * n + e[14]),
        (t[15] = c * i + _ * r + p * n + e[15])),
    t
  );
}
function As(t, e, s) {
  let i = s[0],
    r = s[1],
    n = s[2];
  return (
    (t[0] = e[0] * i),
    (t[1] = e[1] * i),
    (t[2] = e[2] * i),
    (t[3] = e[3] * i),
    (t[4] = e[4] * r),
    (t[5] = e[5] * r),
    (t[6] = e[6] * r),
    (t[7] = e[7] * r),
    (t[8] = e[8] * n),
    (t[9] = e[9] * n),
    (t[10] = e[10] * n),
    (t[11] = e[11] * n),
    (t[12] = e[12]),
    (t[13] = e[13]),
    (t[14] = e[14]),
    (t[15] = e[15]),
    t
  );
}
function zs(t, e, s, i) {
  let r = i[0],
    n = i[1],
    h = i[2],
    a = Math.hypot(r, n, h),
    l,
    c,
    f,
    o,
    d,
    _,
    u,
    g,
    m,
    p,
    w,
    y,
    v,
    b,
    x,
    z,
    F,
    E,
    C,
    S,
    R,
    O,
    M,
    ee;
  return Math.abs(a) < vs
    ? null
    : ((a = 1 / a),
      (r *= a),
      (n *= a),
      (h *= a),
      (l = Math.sin(s)),
      (c = Math.cos(s)),
      (f = 1 - c),
      (o = e[0]),
      (d = e[1]),
      (_ = e[2]),
      (u = e[3]),
      (g = e[4]),
      (m = e[5]),
      (p = e[6]),
      (w = e[7]),
      (y = e[8]),
      (v = e[9]),
      (b = e[10]),
      (x = e[11]),
      (z = r * r * f + c),
      (F = n * r * f + h * l),
      (E = h * r * f - n * l),
      (C = r * n * f - h * l),
      (S = n * n * f + c),
      (R = h * n * f + r * l),
      (O = r * h * f + n * l),
      (M = n * h * f - r * l),
      (ee = h * h * f + c),
      (t[0] = o * z + g * F + y * E),
      (t[1] = d * z + m * F + v * E),
      (t[2] = _ * z + p * F + b * E),
      (t[3] = u * z + w * F + x * E),
      (t[4] = o * C + g * S + y * R),
      (t[5] = d * C + m * S + v * R),
      (t[6] = _ * C + p * S + b * R),
      (t[7] = u * C + w * S + x * R),
      (t[8] = o * O + g * M + y * ee),
      (t[9] = d * O + m * M + v * ee),
      (t[10] = _ * O + p * M + b * ee),
      (t[11] = u * O + w * M + x * ee),
      e !== t &&
        ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])),
      t);
}
function Fs(t, e) {
  return (t[0] = e[12]), (t[1] = e[13]), (t[2] = e[14]), t;
}
function ft(t, e) {
  let s = e[0],
    i = e[1],
    r = e[2],
    n = e[4],
    h = e[5],
    a = e[6],
    l = e[8],
    c = e[9],
    f = e[10];
  return (
    (t[0] = Math.hypot(s, i, r)),
    (t[1] = Math.hypot(n, h, a)),
    (t[2] = Math.hypot(l, c, f)),
    t
  );
}
function Cs(t) {
  let e = t[0],
    s = t[1],
    i = t[2],
    r = t[4],
    n = t[5],
    h = t[6],
    a = t[8],
    l = t[9],
    c = t[10];
  const f = e * e + s * s + i * i,
    o = r * r + n * n + h * h,
    d = a * a + l * l + c * c;
  return Math.sqrt(Math.max(f, o, d));
}
const Ss = (function () {
  const t = [0, 0, 0];
  return function (e, s) {
    let i = t;
    ft(i, s);
    let r = 1 / i[0],
      n = 1 / i[1],
      h = 1 / i[2],
      a = s[0] * r,
      l = s[1] * n,
      c = s[2] * h,
      f = s[4] * r,
      o = s[5] * n,
      d = s[6] * h,
      _ = s[8] * r,
      u = s[9] * n,
      g = s[10] * h,
      m = a + o + g,
      p = 0;
    return (
      m > 0
        ? ((p = Math.sqrt(m + 1) * 2),
          (e[3] = 0.25 * p),
          (e[0] = (d - u) / p),
          (e[1] = (_ - c) / p),
          (e[2] = (l - f) / p))
        : a > o && a > g
        ? ((p = Math.sqrt(1 + a - o - g) * 2),
          (e[3] = (d - u) / p),
          (e[0] = 0.25 * p),
          (e[1] = (l + f) / p),
          (e[2] = (_ + c) / p))
        : o > g
        ? ((p = Math.sqrt(1 + o - a - g) * 2),
          (e[3] = (_ - c) / p),
          (e[0] = (l + f) / p),
          (e[1] = 0.25 * p),
          (e[2] = (d + u) / p))
        : ((p = Math.sqrt(1 + g - a - o) * 2),
          (e[3] = (l - f) / p),
          (e[0] = (_ + c) / p),
          (e[1] = (d + u) / p),
          (e[2] = 0.25 * p)),
      e
    );
  };
})();
function Rs(t, e, s, i) {
  let r = e[0],
    n = e[1],
    h = e[2],
    a = e[3],
    l = r + r,
    c = n + n,
    f = h + h,
    o = r * l,
    d = r * c,
    _ = r * f,
    u = n * c,
    g = n * f,
    m = h * f,
    p = a * l,
    w = a * c,
    y = a * f,
    v = i[0],
    b = i[1],
    x = i[2];
  return (
    (t[0] = (1 - (u + m)) * v),
    (t[1] = (d + y) * v),
    (t[2] = (_ - w) * v),
    (t[3] = 0),
    (t[4] = (d - y) * b),
    (t[5] = (1 - (o + m)) * b),
    (t[6] = (g + p) * b),
    (t[7] = 0),
    (t[8] = (_ + w) * x),
    (t[9] = (g - p) * x),
    (t[10] = (1 - (o + u)) * x),
    (t[11] = 0),
    (t[12] = s[0]),
    (t[13] = s[1]),
    (t[14] = s[2]),
    (t[15] = 1),
    t
  );
}
function Ls(t, e) {
  let s = e[0],
    i = e[1],
    r = e[2],
    n = e[3],
    h = s + s,
    a = i + i,
    l = r + r,
    c = s * h,
    f = i * h,
    o = i * a,
    d = r * h,
    _ = r * a,
    u = r * l,
    g = n * h,
    m = n * a,
    p = n * l;
  return (
    (t[0] = 1 - o - u),
    (t[1] = f + p),
    (t[2] = d - m),
    (t[3] = 0),
    (t[4] = f - p),
    (t[5] = 1 - c - u),
    (t[6] = _ + g),
    (t[7] = 0),
    (t[8] = d + m),
    (t[9] = _ - g),
    (t[10] = 1 - c - o),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function Ts(t, e, s, i, r) {
  let n = 1 / Math.tan(e / 2),
    h = 1 / (i - r);
  return (
    (t[0] = n / s),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = n),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = (r + i) * h),
    (t[11] = -1),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 2 * r * i * h),
    (t[15] = 0),
    t
  );
}
function Os(t, e, s, i, r, n, h) {
  let a = 1 / (e - s),
    l = 1 / (i - r),
    c = 1 / (n - h);
  return (
    (t[0] = -2 * a),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = -2 * l),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 2 * c),
    (t[11] = 0),
    (t[12] = (e + s) * a),
    (t[13] = (r + i) * l),
    (t[14] = (h + n) * c),
    (t[15] = 1),
    t
  );
}
function $s(t, e, s, i) {
  let r = e[0],
    n = e[1],
    h = e[2],
    a = i[0],
    l = i[1],
    c = i[2],
    f = r - s[0],
    o = n - s[1],
    d = h - s[2],
    _ = f * f + o * o + d * d;
  _ === 0 ? (d = 1) : ((_ = 1 / Math.sqrt(_)), (f *= _), (o *= _), (d *= _));
  let u = l * d - c * o,
    g = c * f - a * d,
    m = a * o - l * f;
  return (
    (_ = u * u + g * g + m * m),
    _ === 0 &&
      (c ? (a += 1e-6) : l ? (c += 1e-6) : (l += 1e-6),
      (u = l * d - c * o),
      (g = c * f - a * d),
      (m = a * o - l * f),
      (_ = u * u + g * g + m * m)),
    (_ = 1 / Math.sqrt(_)),
    (u *= _),
    (g *= _),
    (m *= _),
    (t[0] = u),
    (t[1] = g),
    (t[2] = m),
    (t[3] = 0),
    (t[4] = o * m - d * g),
    (t[5] = d * u - f * m),
    (t[6] = f * g - o * u),
    (t[7] = 0),
    (t[8] = f),
    (t[9] = o),
    (t[10] = d),
    (t[11] = 0),
    (t[12] = r),
    (t[13] = n),
    (t[14] = h),
    (t[15] = 1),
    t
  );
}
class _e extends Array {
  constructor(
    e = 1,
    s = 0,
    i = 0,
    r = 0,
    n = 0,
    h = 1,
    a = 0,
    l = 0,
    c = 0,
    f = 0,
    o = 1,
    d = 0,
    _ = 0,
    u = 0,
    g = 0,
    m = 1
  ) {
    return super(e, s, i, r, n, h, a, l, c, f, o, d, _, u, g, m), this;
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(e) {
    this[12] = e;
  }
  set y(e) {
    this[13] = e;
  }
  set z(e) {
    this[14] = e;
  }
  set w(e) {
    this[15] = e;
  }
  set(e, s, i, r, n, h, a, l, c, f, o, d, _, u, g, m) {
    return e.length
      ? this.copy(e)
      : (ys(this, e, s, i, r, n, h, a, l, c, f, o, d, _, u, g, m), this);
  }
  translate(e, s = this) {
    return Es(this, s, e), this;
  }
  rotate(e, s, i = this) {
    return zs(this, i, e, s), this;
  }
  scale(e, s = this) {
    return As(this, s, typeof e == "number" ? [e, e, e] : e), this;
  }
  multiply(e, s) {
    return s ? je(this, e, s) : je(this, this, e), this;
  }
  identity() {
    return bs(this), this;
  }
  copy(e) {
    return xs(this, e), this;
  }
  fromPerspective({ fov: e, aspect: s, near: i, far: r } = {}) {
    return Ts(this, e, s, i, r), this;
  }
  fromOrthogonal({ left: e, right: s, bottom: i, top: r, near: n, far: h }) {
    return Os(this, e, s, i, r, n, h), this;
  }
  fromQuaternion(e) {
    return Ls(this, e), this;
  }
  setPosition(e) {
    return (this.x = e[0]), (this.y = e[1]), (this.z = e[2]), this;
  }
  inverse(e = this) {
    return ws(this, e), this;
  }
  compose(e, s, i) {
    return Rs(this, e, s, i), this;
  }
  getRotation(e) {
    return Ss(e, this), this;
  }
  getTranslation(e) {
    return Fs(e, this), this;
  }
  getScaling(e) {
    return ft(e, this), this;
  }
  getMaxScaleOnAxis() {
    return Cs(this);
  }
  lookAt(e, s, i) {
    return $s(this, e, s, i), this;
  }
  determinant() {
    return Ms(this);
  }
  fromArray(e, s = 0) {
    return (
      (this[0] = e[s]),
      (this[1] = e[s + 1]),
      (this[2] = e[s + 2]),
      (this[3] = e[s + 3]),
      (this[4] = e[s + 4]),
      (this[5] = e[s + 5]),
      (this[6] = e[s + 6]),
      (this[7] = e[s + 7]),
      (this[8] = e[s + 8]),
      (this[9] = e[s + 9]),
      (this[10] = e[s + 10]),
      (this[11] = e[s + 11]),
      (this[12] = e[s + 12]),
      (this[13] = e[s + 13]),
      (this[14] = e[s + 14]),
      (this[15] = e[s + 15]),
      this
    );
  }
  toArray(e = [], s = 0) {
    return (
      (e[s] = this[0]),
      (e[s + 1] = this[1]),
      (e[s + 2] = this[2]),
      (e[s + 3] = this[3]),
      (e[s + 4] = this[4]),
      (e[s + 5] = this[5]),
      (e[s + 6] = this[6]),
      (e[s + 7] = this[7]),
      (e[s + 8] = this[8]),
      (e[s + 9] = this[9]),
      (e[s + 10] = this[10]),
      (e[s + 11] = this[11]),
      (e[s + 12] = this[12]),
      (e[s + 13] = this[13]),
      (e[s + 14] = this[14]),
      (e[s + 15] = this[15]),
      e
    );
  }
}
function Is(t, e, s = "YXZ") {
  return (
    s === "XYZ"
      ? ((t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1))),
        Math.abs(e[8]) < 0.99999
          ? ((t[0] = Math.atan2(-e[9], e[10])),
            (t[2] = Math.atan2(-e[4], e[0])))
          : ((t[0] = Math.atan2(e[6], e[5])), (t[2] = 0)))
      : s === "YXZ"
      ? ((t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1))),
        Math.abs(e[9]) < 0.99999
          ? ((t[1] = Math.atan2(e[8], e[10])), (t[2] = Math.atan2(e[1], e[5])))
          : ((t[1] = Math.atan2(-e[2], e[0])), (t[2] = 0)))
      : s === "ZXY"
      ? ((t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1))),
        Math.abs(e[6]) < 0.99999
          ? ((t[1] = Math.atan2(-e[2], e[10])),
            (t[2] = Math.atan2(-e[4], e[5])))
          : ((t[1] = 0), (t[2] = Math.atan2(e[1], e[0]))))
      : s === "ZYX"
      ? ((t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1))),
        Math.abs(e[2]) < 0.99999
          ? ((t[0] = Math.atan2(e[6], e[10])), (t[2] = Math.atan2(e[1], e[0])))
          : ((t[0] = 0), (t[2] = Math.atan2(-e[4], e[5]))))
      : s === "YZX"
      ? ((t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1))),
        Math.abs(e[1]) < 0.99999
          ? ((t[0] = Math.atan2(-e[9], e[5])), (t[1] = Math.atan2(-e[2], e[0])))
          : ((t[0] = 0), (t[1] = Math.atan2(e[8], e[10]))))
      : s === "XZY" &&
        ((t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1))),
        Math.abs(e[4]) < 0.99999
          ? ((t[0] = Math.atan2(e[6], e[5])), (t[1] = Math.atan2(e[8], e[0])))
          : ((t[0] = Math.atan2(-e[9], e[10])), (t[1] = 0))),
    t
  );
}
const Ze = new _e();
class Bs extends Array {
  constructor(e = 0, s = e, i = e, r = "YXZ") {
    return super(e, s, i), (this.order = r), (this.onChange = () => {}), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(e) {
    (this[0] = e), this.onChange();
  }
  set y(e) {
    (this[1] = e), this.onChange();
  }
  set z(e) {
    (this[2] = e), this.onChange();
  }
  set(e, s = e, i = e) {
    return e.length
      ? this.copy(e)
      : ((this[0] = e), (this[1] = s), (this[2] = i), this.onChange(), this);
  }
  copy(e) {
    return (
      (this[0] = e[0]),
      (this[1] = e[1]),
      (this[2] = e[2]),
      this.onChange(),
      this
    );
  }
  reorder(e) {
    return (this.order = e), this.onChange(), this;
  }
  fromRotationMatrix(e, s = this.order) {
    return Is(this, e, s), this;
  }
  fromQuaternion(e, s = this.order) {
    return Ze.fromQuaternion(e), this.fromRotationMatrix(Ze, s);
  }
  toArray(e = [], s = 0) {
    return (e[s] = this[0]), (e[s + 1] = this[1]), (e[s + 2] = this[2]), e;
  }
}
class ot {
  constructor() {
    (this.parent = null),
      (this.children = []),
      (this.visible = !0),
      (this.matrix = new _e()),
      (this.worldMatrix = new _e()),
      (this.matrixAutoUpdate = !0),
      (this.position = new D()),
      (this.quaternion = new ms()),
      (this.scale = new D(1)),
      (this.rotation = new Bs()),
      (this.up = new D(0, 1, 0)),
      (this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation)),
      (this.quaternion.onChange = () =>
        this.rotation.fromQuaternion(this.quaternion));
  }
  setParent(e, s = !0) {
    this.parent && e !== this.parent && this.parent.removeChild(this, !1),
      (this.parent = e),
      s && e && e.addChild(this, !1);
  }
  addChild(e, s = !0) {
    ~this.children.indexOf(e) || this.children.push(e),
      s && e.setParent(this, !1);
  }
  removeChild(e, s = !0) {
    ~this.children.indexOf(e) &&
      this.children.splice(this.children.indexOf(e), 1),
      s && e.setParent(null, !1);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.worldMatrixNeedsUpdate || e) &&
        (this.parent === null
          ? this.worldMatrix.copy(this.matrix)
          : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
        (this.worldMatrixNeedsUpdate = !1),
        (e = !0));
    for (let s = 0, i = this.children.length; s < i; s++)
      this.children[s].updateMatrixWorld(e);
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale),
      (this.worldMatrixNeedsUpdate = !0);
  }
  traverse(e) {
    if (!e(this))
      for (let s = 0, i = this.children.length; s < i; s++)
        this.children[s].traverse(e);
  }
  decompose() {
    this.matrix.getTranslation(this.position),
      this.matrix.getRotation(this.quaternion),
      this.matrix.getScaling(this.scale),
      this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(e, s = !1) {
    s
      ? this.matrix.lookAt(this.position, e, this.up)
      : this.matrix.lookAt(e, this.position, this.up),
      this.matrix.getRotation(this.quaternion),
      this.rotation.fromQuaternion(this.quaternion);
  }
}
function Ns(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[4]),
    (t[4] = e[5]),
    (t[5] = e[6]),
    (t[6] = e[8]),
    (t[7] = e[9]),
    (t[8] = e[10]),
    t
  );
}
function Ds(t, e) {
  let s = e[0],
    i = e[1],
    r = e[2],
    n = e[3],
    h = s + s,
    a = i + i,
    l = r + r,
    c = s * h,
    f = i * h,
    o = i * a,
    d = r * h,
    _ = r * a,
    u = r * l,
    g = n * h,
    m = n * a,
    p = n * l;
  return (
    (t[0] = 1 - o - u),
    (t[3] = f - p),
    (t[6] = d + m),
    (t[1] = f + p),
    (t[4] = 1 - c - u),
    (t[7] = _ - g),
    (t[2] = d - m),
    (t[5] = _ + g),
    (t[8] = 1 - c - o),
    t
  );
}
function Vs(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[3]),
    (t[4] = e[4]),
    (t[5] = e[5]),
    (t[6] = e[6]),
    (t[7] = e[7]),
    (t[8] = e[8]),
    t
  );
}
function Ps(t, e, s, i, r, n, h, a, l, c) {
  return (
    (t[0] = e),
    (t[1] = s),
    (t[2] = i),
    (t[3] = r),
    (t[4] = n),
    (t[5] = h),
    (t[6] = a),
    (t[7] = l),
    (t[8] = c),
    t
  );
}
function qs(t) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 1),
    (t[5] = 0),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 1),
    t
  );
}
function Us(t, e) {
  let s = e[0],
    i = e[1],
    r = e[2],
    n = e[3],
    h = e[4],
    a = e[5],
    l = e[6],
    c = e[7],
    f = e[8],
    o = f * h - a * c,
    d = -f * n + a * l,
    _ = c * n - h * l,
    u = s * o + i * d + r * _;
  return u
    ? ((u = 1 / u),
      (t[0] = o * u),
      (t[1] = (-f * i + r * c) * u),
      (t[2] = (a * i - r * h) * u),
      (t[3] = d * u),
      (t[4] = (f * s - r * l) * u),
      (t[5] = (-a * s + r * n) * u),
      (t[6] = _ * u),
      (t[7] = (-c * s + i * l) * u),
      (t[8] = (h * s - i * n) * u),
      t)
    : null;
}
function He(t, e, s) {
  let i = e[0],
    r = e[1],
    n = e[2],
    h = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    f = e[7],
    o = e[8],
    d = s[0],
    _ = s[1],
    u = s[2],
    g = s[3],
    m = s[4],
    p = s[5],
    w = s[6],
    y = s[7],
    v = s[8];
  return (
    (t[0] = d * i + _ * h + u * c),
    (t[1] = d * r + _ * a + u * f),
    (t[2] = d * n + _ * l + u * o),
    (t[3] = g * i + m * h + p * c),
    (t[4] = g * r + m * a + p * f),
    (t[5] = g * n + m * l + p * o),
    (t[6] = w * i + y * h + v * c),
    (t[7] = w * r + y * a + v * f),
    (t[8] = w * n + y * l + v * o),
    t
  );
}
function ks(t, e, s) {
  let i = e[0],
    r = e[1],
    n = e[2],
    h = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    f = e[7],
    o = e[8],
    d = s[0],
    _ = s[1];
  return (
    (t[0] = i),
    (t[1] = r),
    (t[2] = n),
    (t[3] = h),
    (t[4] = a),
    (t[5] = l),
    (t[6] = d * i + _ * h + c),
    (t[7] = d * r + _ * a + f),
    (t[8] = d * n + _ * l + o),
    t
  );
}
function Gs(t, e, s) {
  let i = e[0],
    r = e[1],
    n = e[2],
    h = e[3],
    a = e[4],
    l = e[5],
    c = e[6],
    f = e[7],
    o = e[8],
    d = Math.sin(s),
    _ = Math.cos(s);
  return (
    (t[0] = _ * i + d * h),
    (t[1] = _ * r + d * a),
    (t[2] = _ * n + d * l),
    (t[3] = _ * h - d * i),
    (t[4] = _ * a - d * r),
    (t[5] = _ * l - d * n),
    (t[6] = c),
    (t[7] = f),
    (t[8] = o),
    t
  );
}
function Xs(t, e, s) {
  let i = s[0],
    r = s[1];
  return (
    (t[0] = i * e[0]),
    (t[1] = i * e[1]),
    (t[2] = i * e[2]),
    (t[3] = r * e[3]),
    (t[4] = r * e[4]),
    (t[5] = r * e[5]),
    (t[6] = e[6]),
    (t[7] = e[7]),
    (t[8] = e[8]),
    t
  );
}
function Ws(t, e) {
  let s = e[0],
    i = e[1],
    r = e[2],
    n = e[3],
    h = e[4],
    a = e[5],
    l = e[6],
    c = e[7],
    f = e[8],
    o = e[9],
    d = e[10],
    _ = e[11],
    u = e[12],
    g = e[13],
    m = e[14],
    p = e[15],
    w = s * a - i * h,
    y = s * l - r * h,
    v = s * c - n * h,
    b = i * l - r * a,
    x = i * c - n * a,
    z = r * c - n * l,
    F = f * g - o * u,
    E = f * m - d * u,
    C = f * p - _ * u,
    S = o * m - d * g,
    R = o * p - _ * g,
    O = d * p - _ * m,
    M = w * O - y * R + v * S + b * C - x * E + z * F;
  return M
    ? ((M = 1 / M),
      (t[0] = (a * O - l * R + c * S) * M),
      (t[1] = (l * C - h * O - c * E) * M),
      (t[2] = (h * R - a * C + c * F) * M),
      (t[3] = (r * R - i * O - n * S) * M),
      (t[4] = (s * O - r * C + n * E) * M),
      (t[5] = (i * C - s * R - n * F) * M),
      (t[6] = (g * z - m * x + p * b) * M),
      (t[7] = (m * v - u * z - p * y) * M),
      (t[8] = (u * x - g * v + p * w) * M),
      t)
    : null;
}
class Ys extends Array {
  constructor(e = 1, s = 0, i = 0, r = 0, n = 1, h = 0, a = 0, l = 0, c = 1) {
    return super(e, s, i, r, n, h, a, l, c), this;
  }
  set(e, s, i, r, n, h, a, l, c) {
    return e.length
      ? this.copy(e)
      : (Ps(this, e, s, i, r, n, h, a, l, c), this);
  }
  translate(e, s = this) {
    return ks(this, s, e), this;
  }
  rotate(e, s = this) {
    return Gs(this, s, e), this;
  }
  scale(e, s = this) {
    return Xs(this, s, e), this;
  }
  multiply(e, s) {
    return s ? He(this, e, s) : He(this, this, e), this;
  }
  identity() {
    return qs(this), this;
  }
  copy(e) {
    return Vs(this, e), this;
  }
  fromMatrix4(e) {
    return Ns(this, e), this;
  }
  fromQuaternion(e) {
    return Ds(this, e), this;
  }
  fromBasis(e, s, i) {
    return this.set(e[0], e[1], e[2], s[0], s[1], s[2], i[0], i[1], i[2]), this;
  }
  inverse(e = this) {
    return Us(this, e), this;
  }
  getNormalMatrix(e) {
    return Ws(this, e), this;
  }
}
let js = 0;
class Zs extends ot {
  constructor(
    e,
    {
      geometry: s,
      program: i,
      mode: r = e.TRIANGLES,
      frustumCulled: n = !0,
      renderOrder: h = 0,
    } = {}
  ) {
    super(),
      e.canvas || console.error("gl not passed as first argument to Mesh"),
      (this.gl = e),
      (this.id = js++),
      (this.geometry = s),
      (this.program = i),
      (this.mode = r),
      (this.frustumCulled = n),
      (this.renderOrder = h),
      (this.modelViewMatrix = new _e()),
      (this.normalMatrix = new Ys()),
      (this.beforeRenderCallbacks = []),
      (this.afterRenderCallbacks = []);
  }
  onBeforeRender(e) {
    return this.beforeRenderCallbacks.push(e), this;
  }
  onAfterRender(e) {
    return this.afterRenderCallbacks.push(e), this;
  }
  draw({ camera: e } = {}) {
    this.beforeRenderCallbacks.forEach(
      (i) => i && i({ mesh: this, camera: e })
    ),
      e &&
        (this.program.uniforms.modelMatrix ||
          Object.assign(this.program.uniforms, {
            modelMatrix: { value: null },
            viewMatrix: { value: null },
            modelViewMatrix: { value: null },
            normalMatrix: { value: null },
            projectionMatrix: { value: null },
            cameraPosition: { value: null },
          }),
        (this.program.uniforms.projectionMatrix.value = e.projectionMatrix),
        (this.program.uniforms.cameraPosition.value = e.worldPosition),
        (this.program.uniforms.viewMatrix.value = e.viewMatrix),
        this.modelViewMatrix.multiply(e.viewMatrix, this.worldMatrix),
        this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
        (this.program.uniforms.modelMatrix.value = this.worldMatrix),
        (this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
        (this.program.uniforms.normalMatrix.value = this.normalMatrix));
    let s = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({ flipFaces: s }),
      this.geometry.draw({ mode: this.mode, program: this.program }),
      this.afterRenderCallbacks.forEach(
        (i) => i && i({ mesh: this, camera: e })
      );
  }
}
class Te extends Xt {
  constructor(
    e,
    {
      width: s = 1,
      height: i = 1,
      widthSegments: r = 1,
      heightSegments: n = 1,
      attributes: h = {},
    } = {}
  ) {
    const a = r,
      l = n,
      c = (a + 1) * (l + 1),
      f = a * l * 6,
      o = new Float32Array(c * 3),
      d = new Float32Array(c * 3),
      _ = new Float32Array(c * 2),
      u = f > 65536 ? new Uint32Array(f) : new Uint16Array(f);
    Te.buildPlane(o, d, _, u, s, i, 0, a, l),
      Object.assign(h, {
        position: { size: 3, data: o },
        normal: { size: 3, data: d },
        uv: { size: 2, data: _ },
        index: { data: u },
      }),
      super(e, h);
  }
  static buildPlane(
    e,
    s,
    i,
    r,
    n,
    h,
    a,
    l,
    c,
    f = 0,
    o = 1,
    d = 2,
    _ = 1,
    u = -1,
    g = 0,
    m = 0
  ) {
    const p = g,
      w = n / l,
      y = h / c;
    for (let v = 0; v <= c; v++) {
      let b = v * y - h / 2;
      for (let x = 0; x <= l; x++, g++) {
        let z = x * w - n / 2;
        if (
          ((e[g * 3 + f] = z * _),
          (e[g * 3 + o] = b * u),
          (e[g * 3 + d] = a / 2),
          (s[g * 3 + f] = 0),
          (s[g * 3 + o] = 0),
          (s[g * 3 + d] = a >= 0 ? 1 : -1),
          (i[g * 2] = x / l),
          (i[g * 2 + 1] = 1 - v / c),
          v === c || x === l)
        )
          continue;
        let F = p + x + v * (l + 1),
          E = p + x + (v + 1) * (l + 1),
          C = p + x + (v + 1) * (l + 1) + 1,
          S = p + x + v * (l + 1) + 1;
        (r[m * 6] = F),
          (r[m * 6 + 1] = E),
          (r[m * 6 + 2] = S),
          (r[m * 6 + 3] = E),
          (r[m * 6 + 4] = C),
          (r[m * 6 + 5] = S),
          m++;
      }
    }
  }
}
var K, J, ue, dt, pe, _t, ge, ut, me, pt, ve, gt;
class Hs {
  constructor(e) {
    I(this, ue);
    I(this, pe);
    I(this, ge);
    I(this, me);
    I(this, ve);
    I(this, K, void 0);
    I(this, J, void 0);
    (this.mouseFriction = new Ct(0, 0)),
      L(this, K, 0),
      L(this, J, 0),
      (this.config = Et),
      (this.timeOffset = Math.random() * 1e4),
      (this.uniforms = {
        u_time: { value: 0 },
        u_scale: { value: 1 },
        u_aspectRatio: { value: [1, 1] },
        u_offset: { value: [0, 0] },
        u_resolution: { value: [0, 0] },
        u_pageResolution: { value: [0, 0] },
        u_mouse: { value: [0, 0] },
        u_gradient: this.config.gradient,
        u_particles: this.config.particles,
      });
    {
      const s = new Kt({ canvas: e, webgl: 2 }),
        i = s.gl;
      i.clearColor(0, 0, 0, 0);
      const r = () => {
          const h = new Yt(i, {
              vertex: zt,
              fragment: Ft,
              uniforms: this.uniforms,
            }),
            a = new Te(i, {
              width: 2,
              height: 2,
              widthSegments: 30,
              heightSegments: 30,
            });
          return new Zs(i, { geometry: a, program: h });
        },
        n = new ot();
      n.addChild(r()), (this.renderer = s), (this.scene = n);
    }
    (this.canvas = e),
      (this.isPaused = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches),
      H(this, ue, dt).call(this),
      At.subscribe((s) => {
        this.renderer.dpr = s != 0 ? s : this.config.scene.resolution;
      }),
      window.addEventListener("blur", () => {
        this.mouseFriction.reset();
      }),
      window.addEventListener("mousemove", (s) => {
        this.mouseFriction.update({
          x: s.pageX - window.scrollX,
          y: s.pageY - window.scrollY,
        });
      });
  }
  draw(e = 0) {
    requestAnimationFrame(this.draw.bind(this)),
      H(this, pe, _t).call(this),
      (!this.isPaused || e == 0) &&
        (L(this, K, A(this, K) + (e - A(this, J))),
        H(this, ge, ut).call(this),
        H(this, ve, gt).call(this),
        H(this, me, pt).call(this, A(this, K))),
      this.renderer.render({ scene: this.scene }),
      L(this, J, e);
  }
}
(K = new WeakMap()),
  (J = new WeakMap()),
  (ue = new WeakSet()),
  (dt = function () {
    (this.uniforms.u_gradient = this.config.gradient),
      (this.uniforms.u_particles = this.config.particles),
      this.isPaused ||
        ((this.mouseFriction.friction = this.config.scene.mouse.friction),
        (this.mouseFriction.strength = this.config.scene.mouse.strength));
  }),
  (pe = new WeakSet()),
  (_t = function () {
    this.renderer.setSize(window.innerWidth, window.innerHeight),
      (this.uniforms.u_resolution.value = [
        this.config.scene.scale * this.canvas.width,
        this.config.scene.scale * this.canvas.height,
      ]),
      (this.uniforms.u_pageResolution.value = [
        this.config.scene.scale *
          this.config.scene.scroll.strength *
          this.renderer.dpr *
          document.documentElement.scrollWidth,
        this.config.scene.scale *
          this.config.scene.scroll.strength *
          this.renderer.dpr *
          document.documentElement.scrollHeight,
      ]),
      (this.uniforms.u_aspectRatio.value = [
        this.canvas.width / this.canvas.height,
        this.canvas.height / this.canvas.width,
      ]),
      (this.uniforms.u_scale.value = window.innerWidth / 1e3);
  }),
  (ge = new WeakSet()),
  (ut = function () {
    this.uniforms.u_offset.value = [
      window.scrollX * this.renderer.dpr * this.config.scene.scroll.strength,
      window.scrollY * this.renderer.dpr * this.config.scene.scroll.strength,
    ];
  }),
  (me = new WeakSet()),
  (pt = function (e) {
    const s = this.config.scene.speed;
    this.uniforms.u_time.value = (s * e) / 1e3 + this.timeOffset;
  }),
  (ve = new WeakSet()),
  (gt = function () {
    this.uniforms.u_mouse.value = [
      -this.mouseFriction.value.x / this.canvas.width,
      this.mouseFriction.value.y / this.canvas.height,
    ];
  });
function Qe(t) {
  let e, s, i;
  return {
    c() {
      (e = q("canvas")), this.h();
    },
    l(r) {
      (e = U(r, "CANVAS", { id: !0, class: !0 })), k(e).forEach(T), this.h();
    },
    h() {
      $(e, "id", "gradient"), $(e, "class", t[0]);
    },
    m(r, n) {
      G(r, e, n), t[3](e), (i = !0);
    },
    p(r, n) {
      (!i || n & 1) && $(e, "class", r[0]);
    },
    i(r) {
      i ||
        (xt(() => {
          s || (s = $e(e, Be, { delay: 0, duration: 200 }, !0)), s.run(1);
        }),
        (i = !0));
    },
    o(r) {
      s || (s = $e(e, Be, { delay: 0, duration: 200 }, !1)), s.run(0), (i = !1);
    },
    d(r) {
      r && T(e), t[3](null), r && s && s.end();
    },
  };
}
function Qs(t) {
  let e,
    s,
    i = t[2] && Qe(t);
  return {
    c() {
      i && i.c(), (e = Oe());
    },
    l(r) {
      i && i.l(r), (e = Oe());
    },
    m(r, n) {
      i && i.m(r, n), G(r, e, n), (s = !0);
    },
    p(r, [n]) {
      r[2]
        ? i
          ? (i.p(r, n), n & 4 && B(i, 1))
          : ((i = Qe(r)), i.c(), B(i, 1), i.m(e.parentNode, e))
        : i &&
          (et(),
          V(i, 1, 1, () => {
            i = null;
          }),
          tt());
    },
    i(r) {
      s || (B(i), (s = !0));
    },
    o(r) {
      V(i), (s = !1);
    },
    d(r) {
      i && i.d(r), r && T(e);
    },
  };
}
function Ks(t, e, s) {
  let i,
    r = !1,
    { class: n = void 0 } = e;
  st(() => {
    s(2, (r = !0)),
      requestAnimationFrame(() => {
        new Hs(i).draw();
      });
  });
  function h(a) {
    ce[a ? "unshift" : "push"](() => {
      (i = a), s(1, i);
    });
  }
  return (
    (t.$$set = (a) => {
      "class" in a && s(0, (n = a.class));
    }),
    [n, i, r, h]
  );
}
class Js extends ne {
  constructor(e) {
    super(), he(this, e, Ks, Qs, le, { class: 0 });
  }
}
Y.disable_scroll_handling;
Y.goto;
Y.invalidate;
Y.invalidateAll;
Y.prefetch;
Y.prefetch_routes;
Y.before_navigate;
const ei = Y.after_navigate;
function ti(t) {
  let e,
    s = t[0].title + "",
    i,
    r,
    n,
    h,
    a;
  return {
    c() {
      (e = q("a")), (i = yt(s)), this.h();
    },
    l(l) {
      e = U(l, "A", { class: !0, href: !0 });
      var c = k(e);
      (i = bt(c, s)), c.forEach(T), this.h();
    },
    h() {
      $(
        e,
        "class",
        (r =
          "link relative z-10 -mx-[.875rem] -my-[.375rem] block px-[.875rem] py-[.375rem] hover:cursor-pointer " +
          t[1])
      ),
        $(e, "href", (n = t[0].href));
    },
    m(l, c) {
      G(l, e, c),
        Q(e, i),
        t[4](e),
        h || ((a = [fe(e, "mouseover", t[3]), fe(e, "focus", t[3])]), (h = !0));
    },
    p(l, [c]) {
      c & 1 && s !== (s = l[0].title + "") && wt(i, s),
        c & 2 &&
          r !==
            (r =
              "link relative z-10 -mx-[.875rem] -my-[.375rem] block px-[.875rem] py-[.375rem] hover:cursor-pointer " +
              l[1]) &&
          $(e, "class", r),
        c & 1 && n !== (n = l[0].href) && $(e, "href", n);
    },
    i: Fe,
    o: Fe,
    d(l) {
      l && T(e), t[4](null), (h = !1), it(a);
    },
  };
}
const Re = new Set();
let Le = rt();
function si(t) {
  for (const e of Re)
    if (e.getAttribute("href") == t) return e.getBoundingClientRect();
}
function ii(t, e, s) {
  let { item: i } = e,
    { class: r = "" } = e,
    n;
  st(() => (Re.add(n), () => Re.delete(n)));
  function h() {
    Le.set(i.href);
  }
  function a(l) {
    ce[l ? "unshift" : "push"](() => {
      (n = l), s(2, n);
    });
  }
  return (
    (t.$$set = (l) => {
      "item" in l && s(0, (i = l.item)), "class" in l && s(1, (r = l.class));
    }),
    [i, r, n, h, a]
  );
}
class mt extends ne {
  constructor(e) {
    super(), he(this, e, ii, ti, le, { item: 0, class: 1 });
  }
}
function ri(t) {
  let e, s, i, r, n, h, a;
  const l = t[9].default,
    c = nt(l, t, t[8], null);
  return {
    c() {
      (e = q("div")), (s = q("div")), (i = oe()), c && c.c(), this.h();
    },
    l(f) {
      e = U(f, "DIV", { class: !0 });
      var o = k(e);
      (s = U(o, "DIV", { class: !0 })),
        k(s).forEach(T),
        (i = de(o)),
        c && c.l(o),
        o.forEach(T),
        this.h();
    },
    h() {
      $(
        s,
        "class",
        "absolute inset-[.375rem] rounded-[.625rem] bg-white opacity-0"
      ),
        $(e, "class", (r = "relative " + t[0]));
    },
    m(f, o) {
      G(f, e, o),
        Q(e, s),
        t[10](s),
        Q(e, i),
        c && c.m(e, null),
        t[11](e),
        (n = !0),
        h ||
          ((a = [fe(window, "resize", t[4]), fe(e, "mouseleave", t[3])]),
          (h = !0));
    },
    p(f, [o]) {
      c &&
        c.p &&
        (!n || o & 256) &&
        ht(c, l, f, f[8], n ? at(l, f[8], o, null) : lt(f[8]), null),
        (!n || (o & 1 && r !== (r = "relative " + f[0]))) && $(e, "class", r);
    },
    i(f) {
      n || (B(c, f), (n = !0));
    },
    o(f) {
      V(c, f), (n = !1);
    },
    d(f) {
      f && T(e), t[10](null), c && c.d(f), t[11](null), (h = !1), it(a);
    },
  };
}
function Ee(t, e) {
  return [Object.keys(e).reduce((i, r) => ({ ...i, [r]: t[r] }), {}), e];
}
function Ae(t) {
  var e;
  return {
    duration: (e = t == null ? void 0 : t.duration) != null ? e : 200,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    fill: "both",
  };
}
function ni(t, e, s) {
  let i, r;
  Ie(t, vt, (p) => s(6, (i = p))), Ie(t, Le, (p) => s(7, (r = p)));
  let { $$slots: n = {}, $$scope: h } = e,
    { class: a = "" } = e,
    l,
    c,
    f = !1,
    o;
  function d() {
    Le.set(void 0);
  }
  function _() {
    s(5, (f = !0));
  }
  function u(p, w) {
    const y = getComputedStyle(c),
      v = l.getBoundingClientRect();
    if (!p) {
      c.animate(
        Ee(y, { opacity: "0", transform: "scale(0.9)" }),
        Ae({ duration: 200 })
      );
      return;
    }
    const b = y.opacity == "0",
      x = p.left - v.left,
      z = c.offsetLeft,
      F = Math.abs(x - z),
      E = w ? 0 : 200 + Math.sqrt(F * 100);
    o != x &&
      (c.animate(
        Ee(y, { opacity: "0.1", transform: "scale(1)" }),
        Ae({ duration: E })
      ),
      c.animate(
        Ee(y, { left: `${x}px`, width: `${p.width}px` }),
        Ae({ duration: b ? 0 : E })
      ),
      (o = x));
  }
  function g(p) {
    ce[p ? "unshift" : "push"](() => {
      (c = p), s(1, c);
    });
  }
  function m(p) {
    ce[p ? "unshift" : "push"](() => {
      (l = p), s(2, l);
    });
  }
  return (
    (t.$$set = (p) => {
      "class" in p && s(0, (a = p.class)),
        "$$scope" in p && s(8, (h = p.$$scope));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 226 &&
        c &&
        document.fonts.ready.then(() => {
          var w;
          const p = si((w = r != null ? r : i) != null ? w : "");
          u(p, f), f && s(5, (f = !1));
        });
    }),
    [a, c, l, d, _, f, i, r, h, n, g, m]
  );
}
class hi extends ne {
  constructor(e) {
    super(), he(this, e, ni, ri, le, { class: 0 });
  }
}
function Ke(t, e, s) {
  const i = t.slice();
  return (i[1] = e[s]), i;
}
function Je(t) {
  let e, s, i;
  return (
    (s = new mt({ props: { item: t[1] } })),
    {
      c() {
        (e = q("li")), te(s.$$.fragment), this.h();
      },
      l(r) {
        e = U(r, "LI", { class: !0 });
        var n = k(e);
        se(s.$$.fragment, n), n.forEach(T), this.h();
      },
      h() {
        $(e, "class", "text-white/70");
      },
      m(r, n) {
        G(r, e, n), ie(s, e, null), (i = !0);
      },
      p: Fe,
      i(r) {
        i || (B(s.$$.fragment, r), (i = !0));
      },
      o(r) {
        V(s.$$.fragment, r), (i = !1);
      },
      d(r) {
        r && T(e), re(s);
      },
    }
  );
}
function li(t) {
  let e, s, i, r, n, h;
  i = new mt({ props: { item: ae[0] } });
  let a = ae.slice(1),
    l = [];
  for (let f = 0; f < a.length; f += 1) l[f] = Je(Ke(t, a, f));
  const c = (f) =>
    V(l[f], 1, 1, () => {
      l[f] = null;
    });
  return {
    c() {
      (e = q("ul")),
        (s = q("li")),
        te(i.$$.fragment),
        (r = oe()),
        (n = q("div"));
      for (let f = 0; f < l.length; f += 1) l[f].c();
      this.h();
    },
    l(f) {
      e = U(f, "UL", { class: !0 });
      var o = k(e);
      s = U(o, "LI", { class: !0 });
      var d = k(s);
      se(i.$$.fragment, d),
        d.forEach(T),
        (r = de(o)),
        (n = U(o, "DIV", { class: !0 }));
      var _ = k(n);
      for (let u = 0; u < l.length; u += 1) l[u].l(_);
      _.forEach(T), o.forEach(T), this.h();
    },
    h() {
      $(s, "class", "text-white/90"),
        $(n, "class", "flex gap-5 sm:gap-8"),
        $(
          e,
          "class",
          "flex justify-between px-5 py-3 text-lg after:absolute after:inset-0 after:rounded-2xl after:border after:border-white/30 after:bg-white/20 svelte-6bv4xv"
        );
    },
    m(f, o) {
      G(f, e, o), Q(e, s), ie(i, s, null), Q(e, r), Q(e, n);
      for (let d = 0; d < l.length; d += 1) l[d].m(n, null);
      h = !0;
    },
    p(f, o) {
      if (o & 0) {
        a = ae.slice(1);
        let d;
        for (d = 0; d < a.length; d += 1) {
          const _ = Ke(f, a, d);
          l[d]
            ? (l[d].p(_, o), B(l[d], 1))
            : ((l[d] = Je(_)), l[d].c(), B(l[d], 1), l[d].m(n, null));
        }
        for (et(), d = a.length; d < l.length; d += 1) c(d);
        tt();
      }
    },
    i(f) {
      if (!h) {
        B(i.$$.fragment, f);
        for (let o = 0; o < a.length; o += 1) B(l[o]);
        h = !0;
      }
    },
    o(f) {
      V(i.$$.fragment, f), (l = l.filter(Boolean));
      for (let o = 0; o < l.length; o += 1) V(l[o]);
      h = !1;
    },
    d(f) {
      f && T(e), re(i), Mt(l, f);
    },
  };
}
function ai(t) {
  let e, s, i, r;
  return (
    (s = new hi({
      props: {
        class: "relative mx-auto w-full max-w-6xl rounded-2xl backdrop-blur-lg",
        $$slots: { default: [li] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (e = q("nav")), te(s.$$.fragment), this.h();
      },
      l(n) {
        e = U(n, "NAV", { class: !0 });
        var h = k(e);
        se(s.$$.fragment, h), h.forEach(T), this.h();
      },
      h() {
        $(
          e,
          "class",
          (i =
            "z-40 bg-gradient-to-b from-black/20 to-transparent px-screen pt-5 sm:p-6 sm:pb-0 " +
            t[0])
        );
      },
      m(n, h) {
        G(n, e, h), ie(s, e, null), (r = !0);
      },
      p(n, [h]) {
        const a = {};
        h & 16 && (a.$$scope = { dirty: h, ctx: n }),
          s.$set(a),
          (!r ||
            (h & 1 &&
              i !==
                (i =
                  "z-40 bg-gradient-to-b from-black/20 to-transparent px-screen pt-5 sm:p-6 sm:pb-0 " +
                  n[0]))) &&
            $(e, "class", i);
      },
      i(n) {
        r || (B(s.$$.fragment, n), (r = !0));
      },
      o(n) {
        V(s.$$.fragment, n), (r = !1);
      },
      d(n) {
        n && T(e), re(s);
      },
    }
  );
}
let vt = rt();
const ae = [
  { title: "Semantical", href: "/", regex: /^\/$/ },
  { title: "Contact", href: "/#contact", regex: /^\/#contact$/ },
];
function ci(t, e, s) {
  let { class: i = void 0 } = e;
  return (
    ei(({ to: r }) => {
      var n;
      for (const h of ae)
        h.regex.test(
          (n = r == null ? void 0 : r.url.pathname) != null ? n : ""
        ) && vt.set(h.href);
    }),
    (t.$$set = (r) => {
      "class" in r && s(0, (i = r.class));
    }),
    [i]
  );
}
class fi extends ne {
  constructor(e) {
    super(), he(this, e, ci, ai, le, { class: 0 });
  }
}
var oi = () => {
  window.va ||
    (window.va = function (...e) {
      (window.vaq = window.vaq || []).push(e);
    });
};
function di() {
  return typeof window < "u";
}
function ze() {
  return typeof process > "u", !1;
}
var _i = ({ beforeSend: t, debug: e } = { debug: ze() }) => {
  var s;
  if (!di()) return;
  oi(), t && ((s = window.va) == null || s.call(window, "beforeSend", t));
  const i = ze()
    ? "https://cdn.vercel-insights.com/v1/script.debug.js"
    : "/_vercel/insights/script.js";
  if (document.head.querySelector(`script[src*="${i}"]`)) return;
  const r = document.createElement("script");
  (r.src = i),
    (r.defer = !0),
    ze() && e === !1 && r.setAttribute("data-debug", "false"),
    document.head.appendChild(r);
};
function ui(t) {
  let e, s, i, r, n;
  (e = new Js({ props: { class: "fixed inset-0" } })),
    (i = new fi({ props: { class: "w-full" } }));
  const h = t[1].default,
    a = nt(h, t, t[0], null);
  return {
    c() {
      te(e.$$.fragment), (s = oe()), te(i.$$.fragment), (r = oe()), a && a.c();
    },
    l(l) {
      se(e.$$.fragment, l),
        (s = de(l)),
        se(i.$$.fragment, l),
        (r = de(l)),
        a && a.l(l);
    },
    m(l, c) {
      ie(e, l, c),
        G(l, s, c),
        ie(i, l, c),
        G(l, r, c),
        a && a.m(l, c),
        (n = !0);
    },
    p(l, [c]) {
      a &&
        a.p &&
        (!n || c & 1) &&
        ht(a, h, l, l[0], n ? at(h, l[0], c, null) : lt(l[0]), null);
    },
    i(l) {
      n || (B(e.$$.fragment, l), B(i.$$.fragment, l), B(a, l), (n = !0));
    },
    o(l) {
      V(e.$$.fragment, l), V(i.$$.fragment, l), V(a, l), (n = !1);
    },
    d(l) {
      re(e, l), l && T(s), re(i, l), l && T(r), a && a.d(l);
    },
  };
}
function pi(t, e, s) {
  let { $$slots: i = {}, $$scope: r } = e;
  return (
    _i(),
    (t.$$set = (n) => {
      "$$scope" in n && s(0, (r = n.$$scope));
    }),
    [r, i]
  );
}
class yi extends ne {
  constructor(e) {
    super(), he(this, e, pi, ui, le, {});
  }
}
export { yi as default };
