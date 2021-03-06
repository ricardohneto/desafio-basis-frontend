import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from 'app/models/Aluno';

@Injectable()
export class AlunoService {

  private aluno: Aluno = new Aluno();
  constructor(private http:HttpClient) { }

  URL='http://localhost:8080/api/alunos';

  getAlunos(){
    return this.http.get<Aluno[]>(this.URL);
  }

  getAlunosDetalhes(){
    return this.http.get<Aluno[]>(this.URL+'/detalhes');
  }

  cadastrar(aluno:Aluno){
    return this.http.post<Aluno>(this.URL, aluno);
  }

  getAlunoMatricula(matricula:string){
    return this.http.get<Aluno>(this.URL+"/"+matricula);
  }

  atualizar(aluno:Aluno){
    return this.http.put<Aluno>(this.URL+"/", aluno);
  }

  deletar(aluno:Aluno){
    return this.http.delete<Aluno>(this.URL+"/"+aluno.matricula);
  }

  setAluno(aluno:Aluno){
    this.aluno = aluno;
  }

  getAluno(){
    return this.aluno;  
  }
  
}
