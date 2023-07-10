.PHONY: dev
dev:
	@npm run dev

.PHONY: build
build:
	@npm run build

.PHONY: preview
preview: build
	@npm run preview

.PHONY: lint
lint:
	@npm run lint