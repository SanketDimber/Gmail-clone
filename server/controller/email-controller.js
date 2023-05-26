import Email from "../modal/email.js";

export const saveSentEmail = (request,response) => {

    try{

        const email = new Email(request.body);
        email.save(); 

        response.status(200).json('Email saved'); 
        console.log("SAVE");
    }catch(error){

        response.status(500).json(error.message);
        console.log("ERROR in Email controller ",error.message);
    }
}
export const getEmails = async(request,response) => {

    try{

        console.log("QQ");
        let emails;
       if(request.params.type === 'bin'){
         
        emails = await Email.find({bin:true}); 
       }
       else if(request.params.type === 'allmail'){

        emails = await Email.find({}); 
       }
       else if(request.params.type === 'starred'){
        console.log("1ERR");
        emails= await Email.find({stareed:true,bin:false}); 
        console.log("1ERR");
       }
       else{
        
        console.log("EE");
            emails = await Email.find({type:request.params.type}); 
       }
       response.status(200).json(emails); 
    }catch(error){

        response.status(500).json(error.message);
        console.log("ERROR in Email controller Starred",error.message);
    }
} 
export const moveEmailsToBin = async(request,response) => {

    try{

        await Email.updateMany({_id:{$in:request.body}},{$set:{bin:true,stareed:false,type:''}});     //$in is mongodb object, it update data one by one,$set i mogodb object
        response.status(200).json("emails deleted"); 
    }catch(error){

        response.status(500).json(error.message);
        console.log("ERROR in Email controller ",error.message);
    }
} 
export const toggleStartdEmails = async(request,response) => {

    try{

        await Email.updateOne({_id:request.body.id},{$set:{stareed:request.body.value}});     //$in is mongodb object, it update data one by one,$set i mogodb object
        response.status(200).json("Starred Emails"); 
    }catch(error){

        response.status(500).json(error.message);
        console.log("ERROR in Email controller ",error.message);
    }
} 

export const deleteEmails = async(request,response) => {

    try{

        await Email.deleteMany({_id:{$in : request.body}});     //$in is mongodb object, it update data one by one,$set i mogodb object
        response.status(200).json("Email Deleted"); 
    }catch(error){

        response.status(500).json(error.message);
        console.log("ERROR in DELETE ",error.message);
    }
} 