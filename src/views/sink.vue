<template lang="pug">
	.container.mt-2
		a.button.mb-2(@click='alertCustom') Alert !!
		b-table(:data='tableData', :bordered='isBordered', :striped='isStriped', :narrowed='isNarrowed', :selectable='isSelectable', :checkable='isCheckable', :mobile-cards='hasMobileCards', :paginated='isPaginated', :per-page='perPage', :pagination-simple='isPaginationSimple', default-sort='first_name', @check='checked', @select='selected')
			b-table-column(field='id', label='ID', width='40', sortable='', numeric='')
			b-table-column(field='first_name', label='First Name', sortable='')
			b-table-column(field='last_name', label='Last Name', sortable='')
			b-table-column(field='date', label='Date', sortable='', :format='formatDate')
			b-table-column(field='gender', label='Gender')
</template>

<script>

export default {
	data() {
		return {
			tableData: [
                {"id":1,"first_name":"Ryan","last_name":"Hill","gender":"Male"},
                {"id":2,"first_name":"Kathryn","last_name":"Ward","gender":"Female"},
                {"id":3,"first_name":"Sharon","last_name":"Welch","gender":"Female"},
                {"id":4,"first_name":"Beverly","last_name":"Gutierrez","gender":"Female"},
                {"id":5,"first_name":"Gloria","last_name":"Boyd","gender":"Female"}
            ],
            checkItems: [],
            selItem: {},
            isBordered: false,
            isStriped: false,
            isNarrowed: false,
            isSelectable: false,
            isCheckable: false,
            hasMobileCards: true,
            isPaginated: true,
            isPaginationSimple: false,
            perPage: 10
		}
	},
	methods: {
		checked(items, item) {
            this.checkItems = items
        },
        selected(item) {
            this.selItem = item
        },
        formatDate(value, row) {
            return new Date(value).toLocaleDateString()
        },
		alertCustom() {
            this.$dialog.alert({
                title: 'Title Alert',
                message: 'I have a title, a custom button and <b>HTML</b>!',
                confirmText: 'Cool!'
            })
        }
	}
}
</script>
