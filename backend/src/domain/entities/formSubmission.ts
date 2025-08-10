export interface IFormSubmission {
  name: string;
  email: string;
  phone: string;
  date: Date;    
  time: string;    
  adults: number;  
  children: number; 
  message?: string;   
}