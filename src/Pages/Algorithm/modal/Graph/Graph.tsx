export class Graph {
  V: number
  adj: (v:number) => number
  E: Map<any, any>;

  
  constructor() {
    this.V = 0
    this.E = new Map;
    this.adj = (v:number) => {
      return v
    }
  }
  static degree(G: any, v: number) {
    throw new Error("Method not implemented.")
  }
  static maxDegree(G: any) {
    throw new Error("Method not implemented.")
  }
  degree = (G: any, v: any) => {
    let degree = 0
    for (let i in G.adj) {
      degree++
    }
    return degree
  }
  maxDegree = (G: any) => {
    let max = 0;
    for (let v = 0; v < G.V(); v++) {
      if (this.degree(G, v) > max) {
        max = this.degree(G, v)
      }
    }
    return max
  }
  avgDegree = (G: any) => {
    return 2 * G.E() / G.V()
  }
  numberOfSelfLoops = (G: any) => {
    let count = 0;
    for (let v = 0; v < G.V(); v++) {
      for (let w of G.adj(v)) {
        if (v === w) {
          count++
        }
      }
    }
    return count / 2
  }
  toString() {
    let  s = this.V + 'verices,' + this.E + 'deges\n'
    for(let v = 0; v < this.V; v++) {
        s += v + ':';
        for (let w = 0 ; w < this.adj(v); w++) {
          s +=w + " "
        }
        s += '\n';
    }
    return s
  }
}