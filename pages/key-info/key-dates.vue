<template>
    <div class="text-center key-dates">
        <h1 class="text-2xl font-bold mb-4">Key Dates</h1>
        
        <div v-for="year in [2024, 2025, 2026, 2027, 2028, 2029]" :key="year" class="year-section mx-8 mb-4">
            <h2 class="text-xl font-semibold mb-2">{{ year }} Academic Year</h2>
            <table>
                <thead>
                    <tr>
                        <th>Term Code</th>
                        <th>Term Description</th>
                        <th>Term Start Date</th>
                        <th>Term End Date</th>
                        <th>Census Date</th>
                        <th>Duration (weeks)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="term in getTermsByYear(year)" :key="term.code">
                        <td>{{ term.code }}</td>
                        <td>{{ term.description }}</td>
                        <td>{{ term.startDate }}</td>
                        <td>{{ term.endDate }}</td>
                        <td>{{ term.censusDate }}</td>
                        <td>{{ term.duration }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            terms: [
                // 2024
                { code: '243100', description: 'Trimester 1 HE, 2024', startDate: '19/02/2024', endDate: '12/05/2024', censusDate: '8/03/2024', duration: 12, year: 2024 },
                { code: '243200', description: 'Trimester 2 HE, 2024', startDate: '3/06/2024', endDate: '25/08/2024', censusDate: '21/06/2024', duration: 12, year: 2024 },
                { code: '243300', description: 'Trimester 3 HE, 2024', startDate: '16/09/2024', endDate: '8/12/2024', censusDate: '4/10/2024', duration: 12, year: 2024 },
                { code: '243400', description: 'Trimester 4 HE, 2024', startDate: '4/11/2024', endDate: '9/02/2025', censusDate: '22/11/2024', duration: 14, year: 2024 },
                // 2025
                { code: '253100', description: 'Trimester 1 HE, 2025', startDate: '17/02/2025', endDate: '11/05/2025', censusDate: '7/03/2025', duration: 12, year: 2025 },
                { code: '253200', description: 'Trimester 2 HE, 2025', startDate: '2/06/2025', endDate: '24/08/2025', censusDate: '20/06/2025', duration: 12, year: 2025 },
                { code: '253300', description: 'Trimester 3 HE, 2025', startDate: '15/09/2025', endDate: '7/12/2025', censusDate: '3/10/2025', duration: 12, year: 2025 },
                { code: '253400', description: 'Trimester 4 HE, 2025', startDate: '3/11/2025', endDate: '8/02/2026', censusDate: '21/11/2025', duration: 14, year: 2025 },
                // 2026
                { code: '263100', description: 'Trimester 1 HE, 2026', startDate: '16/02/2026', endDate: '10/05/2026', censusDate: '6/03/2026', duration: 12, year: 2026 },
                { code: '263200', description: 'Trimester 2 HE, 2026', startDate: '1/06/2026', endDate: '23/08/2026', censusDate: '19/06/2026', duration: 12, year: 2026 },
                { code: '263300', description: 'Trimester 3 HE, 2026', startDate: '14/09/2026', endDate: '6/12/2026', censusDate: '2/10/2026', duration: 12, year: 2026 },
                { code: '263400', description: 'Trimester 4 HE, 2026', startDate: '2/11/2026', endDate: '7/02/2027', censusDate: '20/11/2026', duration: 14, year: 2026 },
                // 2027
                { code: '273100', description: 'Trimester 1 HE, 2027', startDate: '15/02/2027', endDate: '9/05/2027', censusDate: '5/03/2027', duration: 12, year: 2027 },
                { code: '273200', description: 'Trimester 2 HE, 2027', startDate: '31/05/2027', endDate: '22/08/2027', censusDate: '18/06/2027', duration: 12, year: 2027 },
                { code: '273300', description: 'Trimester 3 HE, 2027', startDate: '13/09/2027', endDate: '5/12/2027', censusDate: '1/10/2027', duration: 12, year: 2027 },
                { code: '273400', description: 'Trimester 4 HE, 2027', startDate: '1/11/2027', endDate: '6/02/2028', censusDate: '19/11/2027', duration: 14, year: 2027 },
                // 2028
                { code: '283100', description: 'Trimester 1 HE, 2028', startDate: '21/02/2028', endDate: '14/05/2028', censusDate: '10/03/2028', duration: 12, year: 2028 },
                { code: '283200', description: 'Trimester 2 HE, 2028', startDate: '5/06/2028', endDate: '27/08/2028', censusDate: '23/06/2028', duration: 12, year: 2028 },
                { code: '283300', description: 'Trimester 3 HE, 2028', startDate: '18/09/2028', endDate: '10/12/2028', censusDate: '6/10/2028', duration: 12, year: 2028 },
                { code: '283400', description: 'Trimester 4 HE, 2028', startDate: '6/11/2028', endDate: '11/02/2029', censusDate: '24/11/2028', duration: 14, year: 2028 },
                // 2029
                { code: '293100', description: 'Trimester 1 HE, 2029', startDate: '19/02/2029', endDate: '13/05/2029', censusDate: '9/03/2029', duration: 12, year: 2029 },
                { code: '293200', description: 'Trimester 2 HE, 2029', startDate: '4/06/2029', endDate: '26/08/2029', censusDate: '22/06/2029', duration: 12, year: 2029 },
                { code: '293300', description: 'Trimester 3 HE, 2029', startDate: '17/09/2029', endDate: '9/12/2029', censusDate: '5/10/2029', duration: 12, year: 2029 },
                { code: '293400', description: 'Trimester 4 HE, 2029', startDate: '5/11/2029', endDate: '10/02/2030', censusDate: '23/11/2029', duration: 14, year: 2029 },
            ]
        }
    },
    methods: {
        getTermsByYear(year) {
            return this.terms.filter(term => term.year === year)
        }
    }
}
</script>

<style scoped>
.key-dates {
    padding: 20px;
}

.year-section {
    margin-bottom: 40px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

:root.dark th,
:root.dark td {
    border-color: #4a5568;
}

th {
    background-color: #f5f5f5;
    font-weight: bold;
}

:root.dark th {
    background-color: #2d3748;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

:root.dark tr:nth-child(even) {
    background-color: #2d3748;
}

:root.dark tr:nth-child(odd) {
    background-color: #1a202c;
}
</style>
    