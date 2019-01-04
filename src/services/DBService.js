class DBService {
  constructor () {
    let recetaDB = localStorage.getItem('Recetas');
    this.recetas = recetaDB ? JSON.parse(recetaDB) : [];

    let clientsDB = localStorage.getItem('Clientes');
    this.clients = clientsDB ? JSON.parse(clientsDB) : [];

    let farmacosDB = localStorage.getItem('Farmacos');
    this.farmacos = farmacosDB ? JSON.parse(farmacosDB) : [];
  }

  getRecetas () {
    return this.recetas;
  }
  agregarRecetas(receta) {
    this.recetas.push(receta);
    localStorage.setItem('Recetas', JSON.stringify(this.recetas));
  }

  getClients () {
    return this.clients;
  }
  agregarClients (client) {
    this.clients.push(client);
    localStorage.setItem('Clientes', JSON.stringify(this.clients));
  }
  removeClient (index){
    this.clients.splice(index,1);
    localStorage.setItem('Clientes', JSON.stringify(this.clients));
  }

  getFarmacos () {
    return this.farmacos
  }
  agregarFarmacos (farmaco) {
    this.farmacos.push(farmaco);
    localStorage.setItem('Farmacos', JSON.stringify(this.farmacos));
  }
  removeFarmaco (index){
    this.farmacos.splice(index,1);
    localStorage.setItem('Farmacos', JSON.stringify(this.farmacos));
  }
}

export default DBService
