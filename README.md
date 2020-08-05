This project was done for the search feature of my website: https://dariomac.com/dm-searcher. The idea is to have a powerful way to do searches over the inner structure of the articles to do QA over time. 

Examples: 
* With this url ()[https://dariomac.com/dm-searcher?q=%24%5B%24not(%24boolean(%24.content.summary))%5D.frontmatter.json.linkto] I can see if I didn't add the field summary to some article.
* This one show the link, title and summary of every content: ()[https://dariomac.com/dm-searcher?q=%24%5B%24boolean(%24.content.summary)%5D.(%7B%0A%20%20%27linkto%27%3A%20%24.frontmatter.json.linkto%2C%0A%20%20%27title%27%3A%20%24.frontmatter.title%2C%0A%20%20%27summary%27%3A%20%24.content.summary%0A%7D)]

The search string is built using (JSONata)[https://jsonata.org/] syntax.

# Jsonata

## How to filter and build custom output
```
**[$contains(`Product Name`, 'Hat')].[SKU, Price]
```

Here we filter by a complex key (Product Name -capitalized and with space-) and then build an output sorted by a field named "s" (a.k.a SKU)
```
**[$contains(`Product Name`, 'Hat')].({'s': $.SKU, 'p': $.Price})^(>s)
```

Here we sort by SKU using $sort function
```
**[$contains(`Product Name`, 'Hat')].SKU ~> $sort(function($l, $r) {$l > $r})
```

```
**[$contains(`laneid`, 'Essay')].({'title':$.title, 'position':$.position})
```

## How to concat outputs
```
**[$contains(`laneid`, 'Article')].({'title':$.title, 'position':$.position, 'url':('http://www.dariomac.com') & $.linkto})
```

## How to mix parent/child info

content is the parent obj from which we want to get authors and the mix with title
```
$.($content:=content; frontmatter.{'authors': $content.authors, 'title': json.title})
```



