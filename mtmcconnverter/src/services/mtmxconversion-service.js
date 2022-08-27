// const { ProductRepository } = require("../database");
const { FormateData } = require("../utils");
const { APIError } = require('../utils/app-errors');

// All Business logic will be here
class mtmxconversionervice {

    // constructor(){
    //     this.repository = new ProductRepository();
    // }

    async MTvalidation(MtInputs){
        try{
            const productResult = await this.repository.MTvalidation(MtInputs)
            return FormateData(productResult);
        }catch(err){
            throw new APIError('Data Not found')
        }
    }
    
    async MtMxConversion(MtInputs){
        try{
            const mtmxconversion = await this.repository.MtMxConversion(MtInputs);
           
            return FormateData(mtmxconversion)

        }catch(err){
            throw new APIError('Data Not found')
        }
    }


    async GetProductDescription(productId){
        try {
            const product = await this.repository.FindById(productId);
            return FormateData(product)
        } catch (err) {
            throw new APIError('Data Not found')
        }
    }

   


    
     
}

module.exports = mtmxconversionervice;