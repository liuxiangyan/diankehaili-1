function init_pbrand(pbid){
	var dd = pb_arr.split(',');
	obj = document.getElementById('fctbox');
	obj.innerText='';
	obj.options[0]=new Option('--------选择品牌--------',0);
	var c=1;
    for (loop=0; loop < dd.length;loop+=2){	 
      	  obj.options[c]=new Option(dd[loop+1],dd[loop]);
      	  c++;
	}
}


function search_pserid(pserid){

	try{
		obj_fct=document.getElementById('fctbox');
//		alert(obj_fct.value);
		if(obj_fct.value!='0'){ 
			obj=document.getElementById('brbox');
			if(ps_arr[obj_fct.value]!=''){
				var dd =ps_arr[obj_fct.value].split(',');       
	            obj.innerText='';
				obj.options.length=0;
		   	    obj.options[0]=new Option('--------选择车系--------',0);
				var c=1;
		        for (loop=0; loop < dd.length;loop+=2){
       				obj.options[c]=new Option(dd[loop+1],dd[loop]);
      				c++;
				}
			}else{
								
			}
			
		}  
   }
   catch(e){
   
   }
}

/*  shor line function for http://www.xcar.com.cn index.htm begin */
function init_pbrand_index(pbid){
	var dd = pb_arr.split(',');
	obj = document.getElementById('fctbox');
	obj.innerText='';
	obj.options[0]=new Option('--选择品牌--',0);
	var c=1;
    for (loop=0; loop < dd.length;loop+=2){	 
      	  obj.options[c]=new Option(dd[loop+1],dd[loop]);
      	  c++;
	}
}


function search_pserid_index(pserid){

	try{
		obj_fct=document.getElementById('fctbox');
//		alert(obj_fct.value);
		if(obj_fct.value!='0'){ 
			obj=document.getElementById('brbox');
			if(ps_arr[obj_fct.value]!=''){
				var dd =ps_arr[obj_fct.value].split(',');       
	            obj.innerText='';
				obj.options.length=0;
		   	    obj.options[0]=new Option('--选择车系--',0);
				var c=1;
		        for (loop=0; loop < dd.length;loop+=2){
       				obj.options[c]=new Option(dd[loop+1],dd[loop]);
      				c++;
				}
			}else{
								
			}			
		}  
   }
   catch(e){
   
   }
}
/*  shor line function  end */

function spec_sn()
{ 
try{
	obj_fct=document.getElementById('fctbox')
	if(obj_fct.value == 0){
		alert("请选择品牌");
	}else{
		obj_br=document.getElementById('brbox');
		if(obj_br.value > 10000){
			bid = parseInt(obj_br.value) - 10000;
			window.open('http://newcar.xcar.com.cn/price/b' + bid);
		}else if(obj_br.value > 0){
			window.open('http://newcar.xcar.com.cn/s' + obj_br.value);
		}else{
			window.open('http://newcar.xcar.com.cn/price/pb' + obj_fct.value);
		}
	}
 }
    catch(e){} 

}


function init_pbrand_newcar(pbid){
	var dd = pb_arr.split(',');
	obj = document.getElementById('fctbox');
	obj.innerText='';
	obj.options.length=0;
	obj.options[0]=new Option('--选择品牌--',0);
	var c=1;
    for (loop=0; loop < dd.length;loop+=2){	 
      	  obj.options[c]=new Option(dd[loop+1],dd[loop]);
      	  c++;
	}
}


function search_pserid_newcar(pserid){

	try{

		obj_fct=document.getElementById('fctbox');
		if(obj_fct.value!='0'){ 
			obj=document.getElementById('brbox');
			if(ps_arr[obj_fct.value]!=''){
				var dd =ps_arr[obj_fct.value].split(',');       
	            obj.innerText='';
				obj.options.length=0;
		   	    obj.options[0]=new Option('--选择车系--',0);
				var c=1;
		        for (loop=0; loop < dd.length;loop+=2){
       				obj.options[c]=new Option(dd[loop+1],dd[loop]);
      				c++;
				}
			}else{
								
			}
			if(document.getElementById('modelbox')){
				document.getElementById('modelbox').options.length=1;
				document.getElementById('modelbox').options[0]=new Option('--选择车型--',0);
			}
			
		}  
   }
   catch(e){
   
   }
}


function search_mid_newcar(pserid){

	try{

		obj_fct=document.getElementById('brbox');
		if(obj_fct.value!='0'){ 
			obj=document.getElementById('modelbox');
			if(m_arr[obj_fct.value]!=''){
				var dd =m_arr[obj_fct.value].split(',');       
	            obj.innerText='';
				obj.options.length=0;
		   	    obj.options[0]=new Option('--选择车型--',0);
				var c=1;
		        for (loop=0; loop < dd.length;loop+=2){
       				obj.options[c]=new Option(dd[loop+1],dd[loop]);
      				c++;
				}
			}else{
								
			}
			
		}  
   }
   catch(e){
   
   }
}

function spec_newcar()
{ 
try{
	obj_fct=document.getElementById('fctbox')
	if(obj_fct.value == 0){
		alert("请选择品牌");
	}else{
		obj_br=document.getElementById('brbox');
		/*下拉菜单的用户点击量 2011.12.19 huhw start*/
		clickP('18','2','');
		/*下拉菜单的用户点击量 2011.12.19 huhw end*/
		if(obj_br.value > 10000){
			bid = parseInt(obj_br.value) - 10000;
			window.open('http://newcar.xcar.com.cn/price/b' + bid);
		}else if(obj_br.value > 0){
			window.location.href='http://newcar.xcar.com.cn/' + obj_br.value + '/';				
		}else{
			window.open('http://newcar.xcar.com.cn/price/pb' + obj_fct.value);
		}
	}
 }
    catch(e){} 

}

function tao123_spec_newcar()
{ 
try{
	obj_fct=document.getElementById('fctbox')
	if(obj_fct.value == 0){
		alert("请选择品牌");
	}else{
		obj_br=document.getElementById('brbox');
		if(obj_br.value > 10000){
			bid = parseInt(obj_br.value) - 10000;
			window.open('http://newcar.xcar.com.cn/price/b' + bid);
		}else if(obj_br.value > 0){
			window.open('http://newcar.xcar.com.cn/' + obj_br.value);
		}else{
			window.open('http://newcar.xcar.com.cn/price/pb' + obj_fct.value);
		}
	}
 }
    catch(e){} 

}

//口碑系统,根据id获取名称
function getchexi(bid,serid){

         if(bid != 0 && serid != 0){

                   var sarray = ps_arr[bid].split(',');

                   for(loop=0; loop < 200;loop+=2){//alert(sarray[loop]);

                            if(sarray[loop] == serid){

                                     document.write(sarray[loop+1]);

                                     break;

                                     return;

                            }

                   }

         }

}