export function parseRange(header,size){
 if(!Number.isSafeInteger(size)||size<0)throw new Error("Resource size must be a non-negative safe integer");
 const full=note=>({status:200,start:size?0:null,end:size?size-1:null,length:size,contentRange:null,note:note||"No Range header: select the complete representation."});
 const unsat={status:416,start:null,end:null,length:0,contentRange:`bytes */${size}`,note:"The requested interval cannot be satisfied."};
 if(!header||!header.trim())return full();
 if(header.includes(","))return{status:"UNSUPPORTED",start:null,end:null,length:0,contentRange:null,note:"This lab currently models one byte range at a time; multipart ranges are not simulated."};
 const m=/^bytes=(\d*)-(\d*)$/i.exec(header.trim());
 if(!m||(!m[1]&&!m[2]))return full("Malformed Range syntax is ignored in this model; the full representation is selected.");
 if(size===0)return unsat;
 let start,end;
 if(!m[1]){const suffix=Number(m[2]);if(!Number.isSafeInteger(suffix)||suffix<=0)return unsat;start=Math.max(0,size-suffix);end=size-1}
 else{start=Number(m[1]);end=m[2]?Number(m[2]):size-1;if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start>=size||end<start)return unsat;end=Math.min(end,size-1)}
 return{status:206,start,end,length:end-start+1,contentRange:`bytes ${start}-${end}/${size}`,note:"The server would return only the selected byte interval."};
}
