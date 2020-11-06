export class StaffService {

  isStaffToken(token: string): boolean {
    if (token === 'staff-token') { 
      return true
    }
  }

}