class DoctorGetAllError extends Error {
    constructor(){
        super("Failed to retrieve doctor list")
        this.name = "DoctorGetAllError"
    }
}

class DoctorCreationError extends Error {
    constructor(message: string){
        super(message)
        this.name = "DoctorCreationError"
    }
}

class DoctorUpdateError extends Error {
    constructor(){
        super("Failed to update doctor")
        this.name = "DoctorUpdateError"
    }
}

class DoctorDeleteError extends Error {
    constructor(){
        super("Failed to delete doctor")
        this.name = "DoctorDeleteError"
    }
}

class PatientGetAllError extends Error {
    constructor(){
        super("Failed to retrieve patient list")
        this.name = "PatientGetAllError"
    }
}

class PatientCreationError extends Error {
    constructor(message: string){
        super(message)
        this.name = "PatientCreationError"
    }
}

class PatientUpdateError extends Error {
    constructor(){
        super("Failed to update patient")
        this.name = "PatientUpdateError"
    }
}

class PatientDeleteError extends Error {
    constructor(){
        super("Failed to delete patient")
        this.name = "PatientDeleteError"
    }
}

class AppointmentGetAllError extends Error {
    constructor(){
        super("Failed to retrieve Appointment list")
        this.name = "AppointmentGetAllError"
    }
}

class AppointmentCreationError extends Error {
    constructor(message: string){
        super(message)
        this.name = "AppointmentCreationError"
    }
}

class AppointmentUpdateError extends Error {
    constructor(){
        super("Failed to update Appointment")
        this.name = "AppointmentUpdateError"
    }
}

class AppointmentDeleteError extends Error {
    constructor(){
        super("Failed to delete Appointment")
        this.name = "AppointmentDeleteError"
    }
}

class RecordNotFoundError extends Error {
    constructor(){
        super("Record has not found yet")
        this.name = "RecordNotFound"
    }
}


class GetAllError extends Error {
    constructor(message: string, componentName?: string){
        super(message)
        this.name = `${componentName}GetAllError`
    }
}

export {
    DoctorGetAllError,
    DoctorCreationError,
    DoctorUpdateError,
    DoctorDeleteError,
    PatientGetAllError,
    PatientCreationError,
    PatientUpdateError,
    PatientDeleteError,
    AppointmentGetAllError,
    AppointmentCreationError,
    AppointmentUpdateError,
    AppointmentDeleteError,
    RecordNotFoundError,
    GetAllError
}