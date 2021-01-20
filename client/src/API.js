import axios from 'axios';


const URL = "https://api.enye.tech/v1/challenge/records";


export const transactProfile1 = async ()=>{
    var returnedProfile=[];
    try{
        const { data } = await axios.get(URL)

        const { profiles } = data.records;

        for(let i=0; i<4; i++){
            returnedProfile = [...returnedProfile,profiles[i]];
        }

        return returnedProfile;
    }catch(err){
        console.log(err)
    }
}

export const transactProfile2 = async ()=>{
    var returnedProfile=[];
    try{
        const { data } = await axios.get(URL)

        const { profiles } = data.records;

        for(let i=4; i<8; i++){
            returnedProfile = [...returnedProfile,profiles[i]];
        }

        return returnedProfile;
    }catch(err){
        console.log(err)
    }
}

export const transactProfile3 = async ()=>{
    var returnedProfile=[];
    try{
        const { data } = await axios.get(URL)

        const { profiles } = data.records;

        for(let i=8; i<12; i++){
            returnedProfile = [...returnedProfile,profiles[i]];
        }

        return returnedProfile;
    }catch(err){
        console.log(err)
    }
}

export const transactProfile4 = async ()=>{
    var returnedProfile=[];
    try{
        const { data } = await axios.get(URL)

        const { profiles } = data.records;

        for(let i=12; i<16; i++){
            returnedProfile = [...returnedProfile,profiles[i]];
        }

        return returnedProfile;
    }catch(err){
        console.log(err)
    }
}

export const transactProfile5 = async ()=>{
    var returnedProfile=[];
    try{
        const { data } = await axios.get(URL)

        const { profiles } = data.records;

        for(let i=16; i<18; i++){
            returnedProfile = [...returnedProfile,profiles[i]];
        }

        return returnedProfile;
    }catch(err){
        console.log(err)
    }
}

export const transactProfile6 = async ()=>{
    var returnedProfile=[];
    try{
        const { data } = await axios.get(URL)

        const { profiles } = data.records;

        for(let i=18; i<20; i++){
            returnedProfile = [...returnedProfile,profiles[i]];
        }

        return returnedProfile;
    }catch(err){
        console.log(err)
    }
}