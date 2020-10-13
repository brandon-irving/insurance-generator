import React from 'react';
import { Grid, Typography, TextField, InputLabel } from '@material-ui/core';
import { useContextState } from 'dynamic-context-provider'

export default function InsuranceForm() {
    const {
        name, street, aptBldgNum, city, state, zipcode,
        year, make, model, vin, effectiveDate,
        updateContextState,
        insurance
    } = useContextState()

    const nextYear = effectiveDate.slice(-2) > 0 ? `20${(Number(effectiveDate.slice(-2)) + 1)}` : '...'
    function handleChange(type, value) {
        let updateState = { [type]: value }
        if(type === 'insurance'){
            const policyNumberMap = {
                geico: '6200-86-06-96/03188',
                progressive: 941842816
            }
            updateState.policyNumber = policyNumberMap[value]
        }
        updateContextState(updateState)
    }
    return (
        <React.Fragment>
            <Typography style={{ textAlign: 'center' }} variant="h6" gutterBottom>
                Personal Information
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <InputLabel id="insurance">Select desired insurance</InputLabel>
                    <select
                        style={{
                            width: '100%',
                            height: '40px',
                            fontSize: '14pt',
                            marginTop: '6px',
                        }}
                        id="insurance"
                        value={insurance}
                        onChange={e => handleChange('insurance', e.target.value)}
                    >
                        {
                            ['geico', 'progressive'].map((insurance, i) => {
                                return (<option key={i} value={insurance}>{insurance}</option>)
                            })
                        }
                    </select>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        value={name}
                        onChange={e => handleChange('name', e.target.value)}
                        id="name"
                        name="name"
                        label="Full name"
                        fullWidth
                        autoComplete="name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        value={street}
                        onChange={e => handleChange('street', e.target.value)}
                        id="street"
                        name="street"
                        label="Address line (Street)"
                        fullWidth
                        autoComplete="address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        value={aptBldgNum}
                        onChange={e => handleChange('aptBldgNum', e.target.value)}
                        id="aptBldgNum"
                        name="aptBldgNum"
                        label="BLDG#, APT#, etc.."
                        fullWidth
                        autoComplete="address-line2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        value={city}
                        onChange={e => handleChange('city', e.target.value)}
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={state}
                        onChange={e => handleChange('state', e.target.value)}
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={zipcode}
                        onChange={e => handleChange('zipcode', e.target.value)}
                        required
                        id="zipcode"
                        name="zipcode"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="postal-code"
                        type="number"
                    />
                </Grid>
            </Grid>
            <Typography style={{ marginTop: '20px', textAlign: 'center' }} variant="h6" gutterBottom>
                Car Information
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={4} sm={4}>
                    <TextField
                        required
                        value={year}
                        onChange={e => handleChange('year', e.target.value)}
                        id="year"
                        name="year"
                        label="Vehicle year"
                        fullWidth
                        type="number"
                    />
                </Grid>
                <Grid item xs={4} sm={4}>
                    <TextField
                        required
                        value={make}
                        onChange={e => handleChange('make', e.target.value)}
                        id="make"
                        name="make"
                        label="Make"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4} sm={4}>
                    <TextField
                        required
                        value={model}
                        onChange={e => handleChange('model', e.target.value)}
                        id="model"
                        name="model"
                        label="Model"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        value={vin}
                        onChange={e => handleChange('vin', e.target.value)}
                        id="vin"
                        name="vin"
                        label="Vin Number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        value={effectiveDate}
                        onChange={e => handleChange('effectiveDate', e.target.value)}
                        id="effectiveDate"
                        name="effectiveDate"
                        label="Start Date (Good for one year)"
                        helperText="mm-dd-yyyy"
                        fullWidth
                    />
                </Grid>
                <Typography style={{ marginTop: '20px', textAlign: 'center' }} gutterBottom>
                    {`Good until ${nextYear}`}
                </Typography>

            </Grid>
        </React.Fragment>
    );
}