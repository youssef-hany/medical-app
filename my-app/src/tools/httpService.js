import 'whatwg-fetch';
import axios from 'axios';


class HttpService{
    connection = () =>{
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3005/db/get')
            .then(response =>{
                resolve(response.json())
            })
        })
        return promise;
    }
    dbList = () =>{
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3005/get/databases')
            .then(response =>{
                resolve(response.json())
            })
        })
        return promise;

    }
    
    
    

    getScale1 = () =>{
		var promise = new Promise((resolve, reject) => {
			
                fetch('http://localhost:3005/get/scale1')
                .then(response => {
				resolve(response.json())
			})
			
		
		});
		return promise;
		
	}
    getScale2 = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3005/get/scale2').then(response =>{
                resolve(response.json())
            })

        })
        return promise
    }
    getScale3 = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3005/get/scale3').then(response =>{
                resolve(response.json())
            })

        })
        return promise
    }
    getScale4 = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3005/get/scale4').then(response =>{
                resolve(response.json())
            })

        })
        return promise
    }
    getDiag = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3005/get/diagnosis').then(response =>{
                resolve(response.json())
            })

        })
        return promise
    }

   
    
}

export default HttpService