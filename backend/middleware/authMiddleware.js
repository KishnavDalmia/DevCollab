export const isAuthenticated = (req,res,next)=> {
    if(req.session && req.session.userId){
        return next();
    }
    return res.status(401).json({message:'Unauthorized'});
};

export const isNotAuthenticated = (req,res,next)=> {  
    if(req.session && req.session.userId){
        return res.status(400).json({message:'Already authenticated'});
    }
    next();
};

