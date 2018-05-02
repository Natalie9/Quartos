

Template.lista.helpers({
  quartos : function(){
      return Quartos.find({});
  },
  clientes : function(){
    return Clientes.find({});
}
});

