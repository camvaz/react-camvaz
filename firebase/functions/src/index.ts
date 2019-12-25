// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { response } from 'express';
import { _objectWithOptions } from 'firebase-functions/lib/providers/storage';
// import * as bcrypt from 'bcrypt';

// const bcrypt = require('bcrypt');


const bodyParser = require('body-parser');
// const jsonparser =bodyParser.json();

const express =  require('express');
// const cors = require('cors');

admin.initializeApp();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(cors({ origin: false}));

app.get('/lang/es/:opc', async (req: { params: { opc: any; }; },res: { send: (arg0: FirebaseFirestore.DocumentSnapshot) => void; })=>{
    try{
        const component = req.params.opc;
        const query = await admin.firestore().collection('App')
                                           .doc('Lang')
                                           .collection('es')
                                           .doc(component)
                                           .get();
        
        res.send(query);
                                        
    } catch (e) {
        response.status(500).send(e);
    } 
})

app.post('/lang',async (req: { body: { object: any; }; },res: { send: (arg0: any) => void; }) => {

    try {
        const obj = req.body.object;
        const query = await admin.firestore().collection('App')
                                             .doc('Lang')
                                             .collection(obj.lang)
                                             .doc(obj.component)
                                             .get();
        res.send(query.data());
    } catch(e) {
        response.status(500).send(e)
    } finally {
        console.log('w');
   }
});

app.post('/contacto',async (req: { body: { object: any; }; },res: { send: (arg0: any) => void; }) => {

    try {
        const obj = req.body.object;
        const query = await admin.firestore().collection('Contacto')
                         .add({
                             nombre: obj.nombre,
                             email: obj.email,
                             descripcion: obj.descripcion
                         })
                        //  .then(success =>{
                        //      res.send(success.id);
                        //  })
                        //  .catch(e => {
                        //     res.send(e);
                        //  })
        res.send(query.id);
    } catch(e) {
        response.status(500).send(e)
    } finally {
        console.log('w');
   }
});

// app.post('cliente/register/:object',async(req: { body: any; },res: { send: (arg0: FirebaseFirestore.WriteResult) => void; }) =>{
//     try{
//         const obj = req.body.object;
//         const exists = await admin.firestore().doc(`Clientes/${obj.email}`).get();
        
//         if(exists){
//             response.status(500).send('Ya se encuentra registrado');
//         }else {
//             let hashres;
//             bcrypt.hash(obj.clave, 10, function(_err: any,hash: any){
//                 hashres = hash;
//             })

//             admin.auth().createUser({
//                 displayName: obj.nombre+' '+obj.apellido,
//                 phoneNumber: obj.telefono,
//                 email: obj.email,
//                 password:hashres,
//                 disabled:false
//             }).then(function(userRecord){
//                 console.log("User new: ", userRecord);
//             }).catch(function(err){
//                 console.log(err);
//             })
    
//             const clientes = await admin.firestore().doc(`Clientes/${obj.email}`).set({
//                 nombre: obj.nombre,
//                 apellido: obj.apellido,
//                 clave: hashres,
//                 telefono: obj.telefono,
//                 direccion: obj.direccion,
//                 email: obj.email
//             },{merge:true});
    
//             res.send(clientes);
//         }
//     } catch(e){
//         console.log(e);
//         response.status(500).send(e);
//         }
// });


// app.post('/cliente/login/:object',async(req: { param: { object: any; }; },res: { send: (arg0: FirebaseFirestore.WriteResult) => void; }) =>{
//     try{
//         const obj = req.param.object;
//         const clientes = await admin.firestore().doc(`Clientes/${obj.email}`).set({

//         });
//         res.send(clientes);
//     } catch(e){
//         console.log(e);
//         response.status(500).send(e);
//     }
// });

// app.get('/login/:email', async (req: { params: { email: any; }; }, res: { send: (arg0: FirebaseFirestore.DocumentData | undefined) => void; }) => {
//     try{
//         const clientes = await admin.firestore().doc(`Clientes/${req.params.email}`).get();
//         res.send(clientes.data())
//     } catch(e){
//         console.log(e);
//         response.status(500).send(e);
//     }

// });

exports.widgets = functions.https.onRequest(app);


// import * as functions from 'firebase-functions';
// const admin = require('firebase-admin');
// const serviceAccount = require('./ServiceAccountKey.json');

// const express = require('express');
// const cors = require('cors');

// const app = express();

// // Automatically allow cross-origin requests
// app.use(cors({ origin: true }));

// // Add middleware to authenticate requests
// // app.use(myMiddleware);

// // build multiple CRUD interfaces:
// app.get('/:id', (req, res) => res.send(Widgets.getById(req.params.id)));
// app.post('/', (req, res) => res.send(Widgets.create()));
// app.put('/:id', (req, res) => res.send(Widgets.update(req.params.id, req.body)));
// app.delete('/:id', (req, res) => res.send(Widgets.delete(req.params.id)));
// app.get('/', (req, res) => res.send(Widgets.list()));

// // Expose Express API as a single Cloud Function:
// exports.widgets = functions.https.onRequest(app);
