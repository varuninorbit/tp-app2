export const store = new Proxy(localStorage, {
    json_q :function(s){ try { JSON.parse(s); return true; } catch (e) { return false; }}
 
    ,get(target, name, receiver) {
         if (!Reflect.has(target, name)) {
             //console.error("Getting non-existent property '" + name + "'");
             return undefined;
         }
         
         if (this.json_q(target[name])) {
             return JSON.parse(target[name]);
          }
 
         return Reflect.get(target, name, receiver);
     },
 
     set(target, name, value, receiver) {
         if (!Reflect.has(target, name)) {
             //console.log(`Setting non-existent property '${name}', initial value: ${value}`);
         }
         
         if(typeof value ==="object"){
             value = JSON.stringify(value);
         }
 
         return Reflect.set(target, name, value, receiver);
     }
 });

