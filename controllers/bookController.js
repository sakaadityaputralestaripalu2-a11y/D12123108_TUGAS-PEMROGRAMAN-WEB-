const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../data/books.json");
function readBooks(){ return JSON.parse(fs.readFileSync(dataPath)); }
function writeBooks(b){ fs.writeFileSync(dataPath, JSON.stringify(b, null, 2)); }
exports.getBooks=(req,res)=>{ res.json(readBooks()); };
exports.getBookById=(req,res)=>{ const b=readBooks(); const f=b.find(x=>x.id==req.params.id); if(!f)return res.status(404).json({message:"Book not found"}); res.json(f); };
exports.addBook=(req,res)=>{ const b=readBooks(); const nb={id:Date.now(), title:req.body.title, author:req.body.author}; b.push(nb); writeBooks(b); res.status(201).json(nb); };
exports.updateBook=(req,res)=>{ const b=readBooks(); const i=b.findIndex(x=>x.id==req.params.id); if(i==-1)return res.status(404).json({message:"Book not found"}); b[i]={...b[i],...req.body}; writeBooks(b); res.json(b[i]); };
exports.deleteBook=(req,res)=>{ let b=readBooks(); if(!b.find(x=>x.id==req.params.id))return res.status(404).json({message:"Book not found"}); b=b.filter(x=>x.id!=req.params.id); writeBooks(b); res.json({message:"Book deleted"}); };