import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { protectedResources } from '../auth-config';
import { AloeToken } from '../models/AloeToken';

@Injectable({
  providedIn: 'root'
})
export class AloeTokenService {

  url = protectedResources.aloeTokenApi.endpoint;

  constructor(private http: HttpClient) { }

  getAloeTokens(){
    return this.http.get<AloeToken[]>(this.url);
  }
}
