<template>
    <UContainer>
        <h2 class="text-2xl font-bold mb-4 text-center pt-6">Banner Codes</h2>
        <table class="banner-codes-table max-w-3xl mx-auto mb-6">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Use</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="code in bannerCodes" :key="code.code">
                    <td>{{ code.code }}</td>
                    <td>{{ code.name }}</td>
                    <td>{{ code.area }}</td>
                    <td>{{ code.use }}</td>
                </tr>
            </tbody>
        </table>
    </UContainer>
</template>

<script>
export default {
    data() {
        return {
            bannerCodes: [
                { code: 'SGASTDN', name: 'General Student', area: 'Student Information', use: 'Students enrolment information' },
                { code: 'SPACMNT', name: 'Person Comment', area: 'Student Information', use: 'Make a comment on student record' },
                { code: 'SPAIDEN', name: 'General Person', area: 'Student Information', use: 'Biographical Information' },
                { code: 'SHACRSE', name: 'Course Summary', area: 'Results/Grades', use: 'List of subjects students previous grades (by term)' },
                { code: 'SFARHST', name: 'Student Registration History and Extension', area: 'Subject Info', use: 'List of subjects students previous grades, enrolments and credits (overall)' },
                { code: 'SSASECT', name: 'Schedule', area: 'Subject Info', use: 'View subject information and timetable' },
                { code: 'SOAHOLD', name: 'Hold Information', area: 'Finance', use: 'List of current and previous holds' },
                { code: 'TSADETL', name: 'Payments', area: 'Finance', use: 'List of all payments and scholarship' },
                { code: 'SFAREG', name: 'Student Course Registration', area: 'Enrolment', use: 'List of current enrolments' },
                { code: 'SSASECQ', name: 'Timetable', area: 'Timetable report', use: 'Live report on classes' },
                { code: 'GKAADIV', name: 'Records', area: 'Check for USI information', use: 'Additional ID Verification into the search field' },
                { code: 'SFASTCA', name: 'Enrolment', area: 'Enrolment log', use: 'Check for all subjects student enrolled or withdrawn' },
                { code: 'SKACHSN', name: 'Check for CHESSN number', area: 'Check for CHESSN number', use: 'Check for CHESSN number' }
            ]
        }
    }
}
</script>

<style scoped>
.banner-codes-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

.banner-codes-table th,
.banner-codes-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

:root.dark .banner-codes-table th,
:root.dark .banner-codes-table td {
    border-color: #4a5568;
}

.banner-codes-table th {
    background-color: #f5f5f5;
    font-weight: bold;
}

:root.dark .banner-codes-table th {
    background-color: #2d3748;
}

.banner-codes-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

:root.dark .banner-codes-table tr:nth-child(even) {
    background-color: #2d3748;
}

:root.dark .banner-codes-table tr:nth-child(odd) {
    background-color: #1a202c;
}
</style>