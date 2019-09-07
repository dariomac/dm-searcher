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



