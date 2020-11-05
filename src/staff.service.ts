export class StaffService {

  isStaffToken(token: string) {
    if (token === 'staff-token') { 
      return true
    }
  }

}