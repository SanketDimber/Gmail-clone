import express from "express";
import { saveSentEmail,getEmails, moveEmailsToBin,toggleStartdEmails,deleteEmails} from "../controller/email-controller.js";

const routes =  express();

routes.post('/save',saveSentEmail);
routes.get('/emails/:type',getEmails);
routes.post('/save-draft',saveSentEmail);
routes.post('/bin',moveEmailsToBin);
routes.post('/starred',toggleStartdEmails);
routes.delete('/delete',deleteEmails);
export default routes;