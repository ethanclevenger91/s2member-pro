jQuery(document).ready(function(d){var g=esc_html=function(x){if(/[&\<\>"']/.test(x=String(x))){x=x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),x=x.replace(/"/g,"&quot;").replace(/'/g,"&#039;")}return x};if(location.href.match(/page\=ws-plugin--s2member-.+?-ops/)){d("#ws-plugin--s2member-pro-eot-reminder-email-enable").on("change",function(){var y=d(this),z=y.val(),x=d(".ws-menu-page-pro-eot-reminder-email-ops");x.css("opacity",z==="1"?"":"0.5")}).trigger("change");var a=d("#ws-plugin--s2member-pro-eot-reminder-email-day"),e=a.find(".-tabs");var n=d("#ws-plugin--s2member-pro-eot-reminder-email-days"),p=d("#ws-plugin--s2member-pro-eot-reminder-email-recipients"),k=p.length?d.JSON.parse(p.val()):{},h=d("#ws-plugin--s2member-pro-eot-reminder-email-recipients-for-day"),l=function(y,x){if(typeof k[y]==="string"){return k[y]}else{if(x&&typeof k._==="string"){return k._}}return""},m=d("#ws-plugin--s2member-pro-eot-reminder-email-subject"),o=m.length?d.JSON.parse(m.val()):{},b=d("#ws-plugin--s2member-pro-eot-reminder-email-subject-for-day"),j=function(y,x){if(typeof o[y]==="string"){return o[y]}else{if(x&&typeof o._==="string"){return o._}}return""},q=d("#ws-plugin--s2member-pro-eot-reminder-email-message"),t=q.length?d.JSON.parse(q.val()):{},f=d("#ws-plugin--s2member-pro-eot-reminder-email-message-for-day"),s=function(y,x){if(typeof t[y]==="string"){return t[y]}else{if(x&&typeof t._==="string"){return t._}}return""};var i=function(){var x,y=[];x=n.val();x=x.replace(/[^0-9,\-]/g,"").split(/,+/);x=d.unique(x);d.each(x,function(A,z){if(/^\-?[0-9]+$/.test(z)){y.push(z)}});return y};var u=function(y,x){var z=a.data("current");if(z&&z!=="_"){k[z]=h.val();o[z]=b.val();t[z]=f.val()}h.val(l(y,x));b.val(j(y,x));f.val(s(y,x));a.data("current",y);e.find("a[data-day]").removeClass("-current");e.find('a[data-day="'+y+'"]').addClass("-current")};var r=function(z){var y=i(),x="";e.html("");if(y.length){d.each(y,function(B,A){x+='<a href="#" data-day="'+g(A)+'">'+esc_html(A)+"</a>"});e.html(x);u(y[0],z);a.show()}else{a.hide();u("_")}};n.on("keyup cut copy paste",function(x){r(true)});e.on("click","a[data-day]",function(y){y.preventDefault();y.stopImmediatePropagation();var x=d(this).data("day");u(x)});n.closest("form").on("submit",function(z){var B=i(),y={},A={},x={};B.push("_");d.each(B,function(D,C){y[C]=l(C);A[C]=j(C);x[C]=s(C)});p.val(d.JSON.stringify(y));m.val(d.JSON.stringify(A));q.val(d.JSON.stringify(x))});if(n.length){r(true)}}if(location.href.match(/page\=ws-plugin--s2member-pro-coupon-codes/)){var w=d(".ws-menu-page-table"),v=w.find(".coupons-table"),c='<tr><td class="-code"><input type="text" spellcheck="false" value="" /></td><td class="-discount"><input type="text" spellcheck="false" value="" /></td><td class="-active_time"><input type="text" spellcheck="false" value="" /></td><td class="-expires_time"><input type="text" spellcheck="false" value="" /></td><td class="-directive"><input type="text" spellcheck="false" value="" /></td><td class="-singulars"><input type="text" spellcheck="false" value="" /></td><td class="-users"><input type="text" spellcheck="false" value="" /></td><td class="-max_uses"><input type="text" spellcheck="false" value="" /></td><td class="-uses"><input type="text" spellcheck="false" value="0" /></td><td class="-actions"><a href="#" class="-up" title="Move Up" tabindex="-1"><i class="fa fa-chevron-circle-up"></i></a><a href="#" class="-down" title="Move Down" tabindex="-1"><i class="fa fa-chevron-circle-down"></i></a><a href="#" class="-delete" title="Delete" tabindex="-1"><i class="fa fa-times-circle"></i></a></td></tr>';v.find("tbody").on("click","a.-up,a.-down",function(z){z.preventDefault(),z.stopImmediatePropagation();var y=d(this),x=y.closest("tr");if(y.is(".-up")){x.insertBefore(x.prev())}else{x.insertAfter(x.next())}});v.find("tbody").on("click","a.-delete",function(z){z.preventDefault(),z.stopImmediatePropagation();var y=d(this),x=y.closest("tr");if(confirm("Delete? Are you sure?")){x.remove()}});v.find("tbody").on("keypress","input",function(x){return x.which!==13});w.find(".coupon-add > a").on("click",function(y){y.preventDefault(),y.stopImmediatePropagation();var x=d(this);v.find("tbody").append(c)});w.find("form").on("submit",function(z){var y=d(this),x="";v.find("tbody > tr").each(function(A,B){d(this).find("input").each(function(C,D){if(C===2){x+=d(D).val()+"~"}else{x+=d(D).val()+"|"}});x+="\n"});d("#ws-plugin--s2member-pro-coupon-codes").val(x)});if(!v.find("tbody > tr").length){v.find("tbody").append(c)}}});