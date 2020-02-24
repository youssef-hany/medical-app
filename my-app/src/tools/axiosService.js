import axios from 'axios';


 export const register = (newPatient) =>{
    return axios.post('http://localhost:3005/register/patient',{
        name: newPatient.name,
        age: newPatient.age,
        gender: newPatient.gender,
       
        diagnosis: {
            d1: newPatient.diagnosis.d1,
            d2: newPatient.diagnosis.d2
        },
        doctorName: newPatient.diagnosis.doctorName,
        bMri: newPatient.bmri,
        bScales: {
            scale1:{
                bsc1it1: newPatient.scales.scale1.bsc1it1,
                bsc1it2: newPatient.scales.scale1.bsc1it2,
                bsc1it3: newPatient.scales.scale1.bsc1it3,
                bsc1it4: newPatient.scales.scale1.bsc1it4,
                bsc1it5: newPatient.scales.scale1.bsc1it5,
                bsc1it6: newPatient.scales.scale1.bsc1it6,
                bsc1it7: newPatient.scales.scale1.bsc1it7,
                bsc1it8: newPatient.scales.scale1.bsc1it8,
                bsc1it9: newPatient.scales.scale1.bsc1it9,
                bsc1it10: newPatient.scales.scale1.bsc1it10,
                bsc1itt: newPatient.scales.scale1.bsc1itt
            },
            scale2:{
                bsc2it1: newPatient.scales.scale2.bsc2it1,
                bsc2it2: newPatient.scales.scale2.bsc2it2,
                bsc2it3: newPatient.scales.scale2.bsc2it3,
                bsc2it4: newPatient.scales.scale2.bsc2it4,
                bsc2it5: newPatient.scales.scale2.bsc2it5,
                bsc2it6: newPatient.scales.scale2.bsc2it6,
                bsc2it7: newPatient.scales.scale2.bsc2it7,
                bsc2it8: newPatient.scales.scale2.bsc2it8,
                bsc2it9: newPatient.scales.scale2.bsc2it9,
                bsc2it10: newPatient.scales.scale2.bsc2it10,
                bsc2itt: newPatient.scales.scale2.bsc2itt
            },
            scale3:{
                bsc3it1: newPatient.scales.scale3.bsc3it1,
                bsc3it2: newPatient.scales.scale3.bsc3it2,
                bsc3it3: newPatient.scales.scale3.bsc3it3,
                bsc3it4: newPatient.scales.scale3.bsc3it4,
                bsc3it5: newPatient.scales.scale3.bsc3it5,
                bsc3it6: newPatient.scales.scale3.bsc3it6,
                bsc3it7: newPatient.scales.scale3.bsc3it7,
                bsc3it8: newPatient.scales.scale3.bsc3it8,
                bsc3it9: newPatient.scales.scale3.bsc3it9,
                bsc3it10: newPatient.scales.scale3.bsc3it10,
                bsc3itt: newPatient.scales.scale3.bsc3itt
            },
            scale4:{
                bsc4it1: newPatient.scales.scale4.bsc4it1,
                bsc4it2: newPatient.scales.scale4.bsc4it2,
                bsc4it3: newPatient.scales.scale4.bsc4it3,
                bsc4it4: newPatient.scales.scale4.bsc4it4,
                bsc4it5: newPatient.scales.scale4.bsc4it5,
                bsc4it6: newPatient.scales.scale4.bsc4it6,
                bsc4it7: newPatient.scales.scale4.bsc4it7,
                bsc4it8: newPatient.scales.scale4.bsc4it8,
                bsc4it9: newPatient.scales.scale4.bsc4it9,
                bsc4it10: newPatient.scales.scale4.bsc4it10,
                bsc4itt: newPatient.scales.scale4.bsc4itt
            }
       
        },

        

    }).then(response => {
        return response.data
    }, err => {

    });
    


}

export const diagnosis = (newDiag) => {
    return axios.post('http://localhost:3005/add/diagnosis',{
        name: newDiag.name
    });

}
 
export const dbSwitch = (db) => {
    return axios.post('http://localhost:3005/db/switch',{
        dbName: db
    }).then(response =>{
        return response.data
    })
}