function authMiddleware(req, res, next) {
    if (req.session && req.session.user) {
      
      next(); 
    } else {
      
      return res.status(401).json({ message: "Acesso negado. Faça login para continuar." });
    }
  }
  
  module.exports = authMiddleware;
  