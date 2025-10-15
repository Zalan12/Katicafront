import { Injectable } from '@angular/core';
import axios from 'axios';
import { ApiResponse } from '../interfaces/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER = 'http://localhost:3000'
  constructor() { }
  async selectAll(table: string): Promise<ApiResponse> {
    try {
      const response = await axios.get(`${this.SERVER}/${table}`);
      return {
        status: response.status,
        data: response.data
      }

    }
    catch (err: any) {
      return {
        status: 500,
        message: "gaty"
      }


    }


  }

  async select(table: string, id: number): Promise<ApiResponse> {
    try {
      const response = await axios.get(`${this.SERVER}/${table}/${id}`);
      return {
        status: response.status,
        data: response.data
      }
    }
    catch (err: any) {
      return {
        status: 500,
        message: "response.data"
      }

    }
  }

  async insert(table: string, data: any) {
    try {
      const response = await axios.post(`${this.SERVER}/${table}`, data);
      return {
        status: response.status,
        message: "JO",
        data: response.data
      }

    }
    catch (err: any) {
      return {
        status: 500,
        message: "gaty"
      }


    }
  }

  async delete(table: string, id: number) {
    try {
      const response = await axios.delete(`${this.SERVER}/${table}/${id}`);
      return {
        status: response.status,
        data: response.data
      }
    }
    catch (err: any) {
      return {
        status: 500,
        data: "response.data"
      }

    }
  }

  async update(table: string, id: number, data: any) {
    try {
      const response = await axios.patch(`${this.SERVER}/${table}/${id}`, data);
      return {
        status: response.status,
        data: response.data
      }
    }
    catch (err: any) {
      return {
        status: 500,
        data: "Modo-sitva"
      }

    }
  }

  deleteAll() { }
}
