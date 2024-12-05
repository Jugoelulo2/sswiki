<template>
    <UContainer>
        <h2 class="text-2xl font-bold mb-4 text-center pt-6">Campus Codes</h2>
        <table class="campus-codes-table max-w-3xl mx-auto mb-6">
            <thead>
                <tr>
                    <th>Campus Code</th>
                    <th>Building Code</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="campus in campusCodes" :key="campus.code">
                    <td>{{ campus.code }}</td>
                    <td>{{ campus.building }}</td>
                    <td>{{ campus.description }}</td>
                </tr>
            </tbody>
        </table>
    </UContainer>
</template>

<script>
export default {
    data() {
        return {
            campusCodes: [
                { code: 'A1', building: 'AD', description: 'Wakefield Street, Adelaide' },
                { code: 'A2', building: 'PP', description: 'Pultenery Street, Adelaide' },
                { code: 'B2', building: 'BN', description: 'Bowen Tce Campus, Brisbane' },
                { code: 'B3', building: 'GS', description: 'Gotha St Campus, Brisbane' },
                { code: 'M1', building: 'FS', description: 'Flinders St Campus, Melbourne' },
                { code: 'M2', building: 'FM', description: 'Fitzroy Campus, Melbourne' },
                { code: 'O1', building: 'OL', description: 'Online Campus' },
                { code: 'S1', building: 'TR', description: 'The Rocks Campus, Sydney' },
                { code: 'S2', building: 'UL', description: 'Ultimo Campus, Sydney' },
                { code: 'S3', building: 'PY', description: 'Pyrmont Campus, Sydney' },
                { code: 'S4', building: 'KS', description: 'Kent St Campus, Sydney' },
                { code: 'S6', building: 'LE', description: 'Leura Campus, NSW' },
                { code: 'S9', building: 'LC', description: 'Leichhardt, NSW' }
            ]
        }
    }
}
</script>

<style scoped>
.campus-codes-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

.campus-codes-table th,
.campus-codes-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

:root.dark .campus-codes-table th,
:root.dark .campus-codes-table td {
    border-color: #4a5568;
}

.campus-codes-table th {
    background-color: #f5f5f5;
    font-weight: bold;
}

:root.dark .campus-codes-table th {
    background-color: #2d3748;
}

.campus-codes-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

:root.dark .campus-codes-table tr:nth-child(even) {
    background-color: #2d3748;
}

:root.dark .campus-codes-table tr:nth-child(odd) {
    background-color: #1a202c;
}
</style>