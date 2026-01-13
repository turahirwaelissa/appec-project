import React, { useState } from 'react'
import './registration.css'

export default function Registration({ sub = 'new' }) {
  const [form, setForm] = useState({
    fullName: '',
    gender: '',
    classLevel: '',
    email: '',
    phone: '',
    dob: '',
    notes: '',
    attachment: ''
  })

  function handleChange(e) {
    const { name, value, type, files } = e.target
    const newValue = type === 'file' ? (files && files[0] ? files[0].name : '') : value
    setForm((s) => ({ ...s, [name]: newValue }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    alert(`Registration submitted for ${form.fullName} (${form.classLevel})\nEmail: ${form.email} \nPhone: ${form.phone}`)
  }

  return (
    <div className="registration">
      {sub === 'new' && (
        <>
          <div className="reg-intro">
            <h2 id="new-student">New Student Registration</h2>
            <p id="requirements">Please complete the form below and attach the required documents (birth certificate, photo, previous records if any).</p>
          </div>

          <form className="reg-form" onSubmit={handleSubmit}>
            <label className="full">
              Full name
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </label>

            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
            </label>

            <label>
              Phone
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="your phone number" />
            </label>

            <label>
              Gender
              <select name="gender" value={form.gender} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              Class
              <select name="classLevel" value={form.classLevel} onChange={handleChange} required>
                <option value="">Select class</option>
                <option value="P6">P6</option>
                <option value="S1">S1</option>
                <option value="S2">S2</option>
                <option value="S3">S3</option>
                <option value="S4">S4</option>
                <option value="S5">S5</option>
                <option value="S6">S6</option>
              </select>
            </label>

            <label>
              Date of birth
              <input name="dob" type="date" value={form.dob} onChange={handleChange} />
            </label>

            <label className="full">
              Additional notes (optional)
              <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Any notes" />
            </label>

            <div className="form-actions">
              <button type="submit" className="btn">Submit Registration</button>
            </div>
          </form>
        </>
      )}

      {sub === 'requirements' && (
        <section id="requirements" className="requirements">
          <h2>Registration Requirements</h2>
          <ul>
            <li>Completed application form</li>
            <li>Birth certificate or ID</li>
            <li>Previous school records (if any)</li>
            <li>Parent/guardian contact information</li>
            <li>Cmplete School fees</li>
            <li>Medical Insurance</li>
           
          </ul>
        </section>
      )}

      {sub === 'fees' && (
        <section id="fees" className="fees">
          <h2>Fees</h2>
          <p>School fees Amount</p>
          <select name="fees" id="fees">
            <option value="">Select fees</option>
            <option value="10000">10,000</option>
            <option value="20000">20,000</option>
            <option value="30000">30,000</option>
          </select>
          <button>Submit Fees</button>
          <p>Registration fees and payment instructions will be provided here.</p>
        </section>
      )}

      {sub === 'help' && (
        <section id="help" className="help">
          <h2>Help</h2>
          <p>If you need assistance, contact the admissions office at admissions@appec.tss or call 0788768700.</p>
        </section>
      )}
    </div>
  )
}
