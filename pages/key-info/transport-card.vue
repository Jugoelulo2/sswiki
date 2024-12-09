<template>
    <UContainer>
        <h1 class="text-center text-2xl font-bold mb-6 pt-6">Transport Card Process</h1>
        
        <UTabs :items="tabItems" class="max-w-3xl mx-auto">
            <template #item="{ item }">
                <div class="p-4 space-y-4">
                    <!-- Campus Info -->
                    <div>
                        <label class="block text-sm font-medium mb-1">Campus</label>
                        <UTextarea
                            v-model="item.data.campus"
                            :rows="1"
                            readonly
                            class="mb-4"
                            variant="none"
                        />
                    </div>

                    <!-- Applicable Students -->
                    <div>
                        <label class="block text-sm font-medium mb-1">Applicable Students</label>
                        <UTextarea
                            v-model="item.data.applicableStudents"
                            :rows="1"
                            readonly
                            class="mb-4"
                            variant="none"
                        />
                    </div>

                    <!-- Requirements -->
                    <div>
                        <label class="block text-sm font-medium mb-1">Requirements and Process</label>
                        <UTextarea
                            v-model="item.data.requirements"
                            :rows="6"
                            autoresize
                            readonly
                            class="mb-4"
                            variant="none"
                        />
                    </div>

                    <!-- Website Link -->
                    <div>
                        <label class="block text-sm font-medium mb-1">Website Link</label>
                        <div class="flex items-center space-x-2">
                            <UButton :to="`https://${item.data.websiteLink}`" variant="link">
                                Visit Site
                            </UButton>
                        </div>
                    </div>
                </div>
            </template>
        </UTabs>
    </UContainer>
</template>

<script setup>


// Define tabs with their content
const tabItems = [
    {
        label: 'VIC',
        data: {
            campus: 'Flinders Street',
            applicableStudents: 'Full Time Undergraduate Domestic Only',
            requirements: `Student must be enrolled in undergraduate subjects only, be full-time, domestic and on-campus.
1. Student completes a PTV Tertiary Student ID form and provides to campus staff with student ID and passport photo
2. Campus staff to sign form and stamp student photos
3. Student then submits form to PTV at Flinders Street Station to get concession card`,
            websiteLink: 'ptv.vic.gov.au'
        }
    },
    {
        label: 'NSW',
        data: {
            campus: 'Surry Hills, Ultimo and Leura',
            applicableStudents: 'Full Time Domestic Only',
            requirements: `Student must be a full-time domestic student enrolled on-campus
1. Student downloads the Application for a NSW Tertiary Student Concession form
2. Submit form to studentservices@torrens.edu.au, Student Services forward to Campus Staff
3. Campus Staff update RailCorp on Dynamics
4. After 2-3 weeks, Student can apply for Opal card at https://www.opal.com.au/ordercard?execution=e1s1`,
            websiteLink: 'transportnsw.info'
        }
    },
    {
        label: 'QLD',
        data: {
            campus: 'Bowen Terrace',
            applicableStudents: 'Full Time Domestic or International',
            requirements: `Student must have QLD address, be full-time and be enrolled on-campus.
1. Purchase an adult go card (To find retailer - https://translink.com.au/tickets-and-fares/go-card/locations)
2. Register go card and log in to your account. Select the 'My Details' tab to submit application.
Students can apply online without registering your go card, however we recommend registering your go card to protect your balance if your card is ever lost or stolen.`,
            websiteLink: 'translink.com.au'
        }
    },
    {
        label: 'SA',
        data: {
            campus: 'Wakefield Street and Pulteney Street',
            applicableStudents: 'Full Time Domestic or International',
            requirements: `Student must have SA address, be full-time and be enrolled on-campus.
1. Purchase a Concession Metro Card at a retailer with Student ID
(To find a retailer - https://www.adelaidemetro.com.au/using-adelaide-metro/retailers-and-facilities)`,
            websiteLink: 'adelaidemetro.com.au'
        }
    }
]
</script>

<style scoped>
:deep(.u-textarea) {
    background-color: rgb(243 244 246);
} 

</style>