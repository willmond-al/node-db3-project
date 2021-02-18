// scheme-model
const db = require('../../data/db-config')

module.exports = {
    find(){
        return db("schemes")
    },

    findById(id){
        return db("schemes as s")
        .where("s.id",id)
    },

    findSteps(id){
        return db("schemes as s")
        .join("steps as st", "st.scheme_id", "s.id")
        .where("s.id", id)
    },

    add(schemeData){
        return db("schemes as s")
        .insert(schemeData)
    },

    addStep(stepData, id){
        return db("schemes as s")
        .join("steps as st", "st.scheme_id", id)
        .insert(stepData)
        // .where("st.scheme_id", id)
    },

    update(changes, id){
        return db("schemes as s")
        .where("s.id", id)
        .update(changes)
    },
    
    remove(id){
        return db("schemes as s")
        .where("s.id", id)
        .del()
    }
    
}