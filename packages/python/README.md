# anyapi

Official typed Python SDK for [AnyAPI](https://getanyapi.com): any API, one wallet, USD, no
subscriptions.

```bash
pip install anyapi
```

```python
from anyapi import AnyAPI

client = AnyAPI()  # reads ANYAPI_API_KEY from the environment
res = client.google.search(query="best coffee maker")
if res.output.found:
    print(res.output.data, res.cost_usd)
```

Async:

```python
from anyapi import AsyncAnyAPI

async with AsyncAnyAPI() as client:
    res = await client.google.search(query="best coffee maker")
```

Sync and async clients, TypedDict inputs, pydantic v2 output models (open provider records
round-trip via `.model_extra`), pagination iterators, a typed error hierarchy, and USD
pricing in every docstring. See the [repo](https://github.com/getanyapi-com/sdks) and its
`SPEC.md` for the full surface.

## License

MIT
