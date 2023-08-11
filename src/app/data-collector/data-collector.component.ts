import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-data-collector',
  templateUrl: './data-collector.component.html',
  styleUrls: ['./data-collector.component.css']
})
export class DataCollectorComponent implements OnInit {
  formData: any = {
    // Initialize deviceType with a default value
    deviceType: 'cisco_ios'
  };

  ipAddresses: string = '';
  username: any;
  password: any;
  deviceType: any;
  configCommand: string = '';
  threadNumber: any;
  outputJson: any ;
  loading: boolean = false; 
  sanitizer: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.ipAddresses = '';
  this.username = '';
  this.password = '';
  this.deviceType = 'cisco_xr';
  this.configCommand = '';
  this.threadNumber = 0;
  }

  submitForm() {
    this.loading = true; 
    const formValues = {
      ipAddresses: this.ipAddresses.split('\n'),
      username: this.username,
      password: this.password,
      deviceType: this.deviceType,
      configCommand: this.configCommand.split('\n'),
      threadNumber: this.threadNumber
    };

    const url = 'http://127.0.0.1:8000/api/data-collector/'; // Replace with your actual API URL

    this.http.post(url, formValues).subscribe(
      (response: any) => {
        console.log('Post request successful', response);
        this.outputJson = JSON.stringify(response, null, 4); // Beautify JSON
        // Format the config_log field with line breaks using the DomSanitizer
        this.loading = false; // Reset loading state when response is received
      },
      error => {
        console.error('Post request error', error);
        console.log('Error Response:', error.error); // Log the error response
        // Handle error, show an error message, etc.
        this.loading = false;// Reset loading state on error as well
      }
    );
    
  }
}
