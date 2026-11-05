<script lang="ts">
    let { content }: { content: string } = $props();

    function parseInline(text: string) {
        return text
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>");
    }

    function parseMarkdown(text: string) {
        return text
            .split("\n")
            .map(line => {
                if (line.startsWith("# ")) {
                    return `<h1>${parseInline(line.slice(2))}</h1>`;
                }

                if (line.startsWith("## ")) {
                    return `<h2>${parseInline(line.slice(3))}</h2>`;
                }

                return `<p>${parseInline(line)}</p>`;
            })
            .join("");
    }

    let html = $derived(parseMarkdown(content));
</script>

{@html html}