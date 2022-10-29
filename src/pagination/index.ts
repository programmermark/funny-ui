// Component entry, the folder where the file exists will be exposed to the user
import Pagination from './Pagination.vue'
import type { App } from 'vue'

Pagination.install = function(app: App) {
  app.component(Pagination.name, Pagination)
}

export const _PaginationComponent = Pagination

export default Pagination
