export const defaultVal = {
    personal_information: {
        name: {
            firstname: "",
            lastname: "",
            middlename: "",
            extension: "",
        },
        birth_date: "",
        birth_place: "",
        gender: "",
        citizenship: "",
        citizenship_dual_country: "",
        civil_status: "",
        civil_status_other: "",
        height: 0,
        weight: 0,
        blood_type: "",
        gsis_no: "",
        pagibig_no: "",
        philhealth_no: "",
        sss_no: "",
        tin_no: "",
        agency_employee_no: "",
        residential_address: {
            house_no: "",
            street: "",
            subdivision: "",
            barangay: "",
            city: "",
            province: "",
            zipcode: "",
        },
        residentail_permanent_is_same: false,
        permanent_address: {
            house_no: "",
            street: "",
            subdivision: "",
            barangay: "",
            city: "",
            province: "",
            zipcode: "",
        },
        telephone_no: "",
        mobile_no: "",
        email: "",
    },
    family_background: {
        spouse_name: {
            firstname: "",
            lastname: "",
            middlename: "",
            extension: "",
        },
        childrens: [
            {
                fullname: "",
                birth_date: "",
            },
        ],
        occupation: "",
        employer_business_name: "",
        business_address: "",
        telephone_no: "",
        fathers_name: {
            firstname: "",
            lastname: "",
            middlename: "",
            extension: "",
        },
        mothers_name: {
            firstname: "",
            lastname: "",
            middlename: "",
            maidenname: "",
        },
    },
    educational_background: {
        elementary: {
            school_name: "",
            degree: "",
            period_of_attendance: {
                from: "",
                to: "",
            },
            highest_unit: "",
            year_graduated: "",
            scholarship: "",
        },
        secondary: {
            school_name: "",
            degree: "",
            period_of_attendance: {
                from: "",
                to: "",
            },
            highest_unit: "",
            year_graduated: "",
            scholarship: "",
        },
        vocational: {
            school_name: "",
            degree: "",
            period_of_attendance: {
                from: "",
                to: "",
            },
            highest_unit: "",
            year_graduated: "",
            scholarship: "",
        },
        college: {
            school_name: "",
            degree: "",
            period_of_attendance: {
                from: "",
                to: "",
            },
            highest_unit: "",
            year_graduated: "",
            scholarship: "",
        },
        graduate_studies: {
            school_name: "",
            degree: "",
            period_of_attendance: {
                from: "",
                to: "",
            },
            highest_unit: "",
            year_graduated: "",
            scholarship: "",
        },
    },
    civil_services: [
        {
            name: "",
            rating: "",
            examination_date: "",
            examination_place: "",
            license_no: "",
            license_validity_date: "",
        },
    ],
    work_experiences: [
        {
            from: "",
            to: "",
            name: "",
            department: "",
            salary: "",
            pay_grade: "",
            appointment_status: "",
            govt_service: "",
        },
    ],
    voluntary_works: [
        {
            organization: "",
            from: "",
            to: "",
            hours_no: "",
            position: "",
        },
    ],
    learning_and_development: [
        {
            title: "",
            from: "",
            to: "",
            hours_no: "",
            type: "",
            conducted_by: "",
        },
    ],
    other_information: [
        {
            skill: "",
            recognition: "",
            membership: "",
        },
    ],
    questions: {
        q34: {
            a: false,
            b: false,
            details: "",
        },
        q35: {
            a: {
                value: "",
                details: "",
            },
            b: {
                value: "",
                details: {
                    date_filed: "",
                    case: "",
                },
            },
        },
        q36: {
            value: "",
            details: "",
        },
        q37: {
            value: "",
            details: "",
        },
        q38: {
            a: {
                value: "",
                details: "",
            },
            b: {
                value: "",
                details: "",
            },
        },
        q39: {
            value: "",
            details: "",
        },
        q40: {
            a: {
                value: "",
                details: "",
            },
            b: {
                value: "",
                details: "",
            },
            c: {
                value: "",
                details: "",
            },
        },
    },
};

export const SUPER_ADMIN = 1;
export const ADMIN = 2;