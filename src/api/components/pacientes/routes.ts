import  { Router} from 'express'
import { PatientController, PatientControllerImpl } from './controller'
import { PatientRepository } from './repository'
import { PatientServiceImpl } from './service'


const router = Router()
const repository = new PatientRepository()
const service = new PatientServiceImpl(repository)
const patientController: PatientController = new PatientControllerImpl(service)


router.get('',  patientController.getAllPatient.bind(patientController))
router.post('/create',  patientController.createPatient.bind(patientController))
router.get('/:id',  patientController.getPatientById.bind(patientController))
router.put('/:id',  patientController.updatePatient.bind(patientController))
router.delete('/:id',  patientController.deletePatient.bind(patientController))



export default router