import firebaseAdmin from 'firebase-admin'
import * as functions from "firebase-functions"

/**
 * Initializes the admin with firebase config
 * @param  {firebase-admin} admin package
 * @return {firebase-admin}       package
 */
export const initialize = (admin) => {
  admin.initializeApp(functions.config());

  return admin
}



// Export constants
export const admin = initialize(firebaseAdmin)
export const database = admin.database()
export const storage = admin.storage()
