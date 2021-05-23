class unionFind {
  id: number[];
  count: number;
  /**
   * 
   * @param {number} N 
   */
  constructor(N:number) {
      this.id = new Array(N).fill(0).map((x, index) => index)
      this.count = N
  }

  countfn(){
      return this.count
  }

  /**
   * 
   * @param {number} p 
   * @param {number} q 
   */
  connected(p:any,q:any){
      return this.find(p)===this.find(q)
  }

  /** 
   * @param {number} p 
   */
  find(p:any){
    return this.id[p]
  }
  /**
   * 
   * @param {number} p 
   * @param {number} q 
   */
  union(p:any,q:any){
    var pId = this.find(p)
    var qId = this.find(q)
    if (pId === qId) return
    this.id.forEach(i => {
        if (this.id[i] === pId) {
            this.id[i] = qId
        }
    })
    this.count--
  }

}
export default unionFind;