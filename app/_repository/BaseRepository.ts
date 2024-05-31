export default interface BaseRepostiroy {
  store(data: any): Promise<any>
  getAll(): Promise<any>
  find(id: any): Promise<any>
  update(id: any, data: any): Promise<any>
  delete(id: any): Promise<any>
}