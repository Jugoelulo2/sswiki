<template>
    <UContainer>
        <h2 class="text-2xl font-bold mb-4 text-center pt-6">Subject Codes</h2>
        <table class="subject-codes-table max-w-3xl mx-auto mb-6">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Meaning</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
                <tr class="separator-row">
                    <td colspan="4">Enrolled</td>
                </tr>
            </thead>
            <tbody>
                <template v-for="(code, index) in subjectCodes" :key="code.code">
                    <tr>
                        <td>{{ code.code }}</td>
                        <td>{{ code.meaning }}</td>
                        <td>{{ code.startDate }}</td>
                        <td>{{ code.endDate }}</td>
                    </tr>
                    <tr v-if="code.code === 'RW'" class="separator-row">
                        <td colspan="4">Waiting</td>
                    </tr>
                    <tr v-if="code.code === 'WL'" class="separator-row">
                        <td colspan="4">Withdrawn - Not Liable for Fees</td>
                    </tr>
                    <tr v-if="code.code === 'FT'" class="separator-row">
                        <td colspan="4">Withdrawn - Liable for Fees</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </UContainer>
</template>

<script>
export default {
    data() {
        return {
            subjectCodes: [
                { code: 'RE', meaning: 'Manually Enrolled', startDate: 'Enrolment Open', endDate: 'Census Date' },
                { code: 'RW', meaning: 'Web Enrolled', startDate: 'Enrolment Open', endDate: 'Friday Week 2 (12-week Trimester)' },
                { code: 'WL', meaning: 'Waitlisted', startDate: 'Enrolment Open', endDate: 'Friday Week 2 (12-week Trimester)' },
                { code: 'DW', meaning: 'Web Drop/Delete', startDate: 'Enrolment Open', endDate: 'Census Date' },
                { code: 'WD', meaning: 'Withdrawn Deleted', startDate: 'Enrolment Open', endDate: 'Finish Date' },
                { code: 'ID', meaning: 'International Withdrawan Deleted', startDate: 'Enrolment Open', endDate: '2 Week Prior to Start Date' },
                { code: 'WA', meaning: 'Withdrawn Admin Error', startDate: 'Enrolment Open', endDate: 'Census Date' },
                { code: 'FA', meaning: 'Finance - Admin Error', startDate: '2 Week Prior to Start Date', endDate: 'Last day of 2099' },
                { code: 'FE', meaning: 'Finance - Exam Committee Recommendation', startDate: '2 Week Prior to Start Date', endDate: 'Last day of 2099' },
                { code: 'FM', meaning: 'Finance - Medical Consideration', startDate: '2 Week Prior to Start Date', endDate: 'Last day of 2099' },
                { code: 'FN', meaning: 'Finance - Non-medical Consideration', startDate: '2 Week Prior to Start Date', endDate: 'Last day of 2099' },
                { code: 'FO', meaning: 'Finance - Other', startDate: '2 Week Prior to Start Date', endDate: 'Last day of 2099' },
                { code: 'FP', meaning: 'Finance - Pre-Census Withdrawal', startDate: '2 Week Prior to Start Date', endDate: 'Last day of 2099' },
                { code: 'FT', meaning: 'Finance - Timetable Change', startDate: '2 Week Prior to Start Date', endDate: 'Last day of 2099' },
                { code: 'WN', meaning: 'Withdrawn Not Fail', startDate: 'Census Date', endDate: 'Academic Withdrawal Date' },
                { code: 'IN', meaning: 'International Withdrawan Not Fail', startDate: '2 Week Prior to Start Date', endDate: 'Academic Withdrawal Date' },
                { code: 'WF', meaning: 'Withdrawn Fail', startDate: 'After Academic Withdrawal Date', endDate: 'Withdrawal Date' },
                { code: 'WV', meaning: 'Withdrawn Discontinued - VET', startDate: 'Enrolment Open', endDate: 'Census Date/Internatinal Liability' },
                { code: 'IF', meaning: 'International Withdrawn Fail', startDate: 'Academic Withdrawal Date', endDate: 'Withdrawal Date' }
            ]
        }
    }
}
</script>

<style scoped>
.subject-codes-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

.subject-codes-table th,
.subject-codes-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

:root.dark .subject-codes-table th,
:root.dark .subject-codes-table td {
    border-color: #4a5568;
}

.subject-codes-table th {
    background-color: #f5f5f5;
    font-weight: bold;
}

:root.dark .subject-codes-table th {
    background-color: #2d3748;
}

.subject-codes-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

:root.dark .subject-codes-table tr:nth-child(even) {
    background-color: #2d3748;
}

:root.dark .subject-codes-table tr:nth-child(odd) {
    background-color: #1a202c;
}

.separator-row {
    background-color: #c6d8cd !important;
    font-weight: bold;
    text-align: center;
}

:root.dark .separator-row {
    background-color: #85f5b0e1 !important;
}

.separator-row td {
    padding: 12px !important;
}
</style>