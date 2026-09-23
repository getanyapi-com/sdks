# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the google platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult
from .._pagination import (
    AsyncPaginator,
    Paginator,
    apaginate,
    paginate,
)

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GoogleAiModeInput(TypedDict, total=False):
    """Input for Google AI Mode."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    prompt: Required[str]
    """The question or prompt to answer with Google AI Mode."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""


class GoogleAiOverviewInput(TypedDict, total=False):
    """Input for Google AI Overview."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    prompt: Required[str]
    """The question or prompt to answer with a Google AI Overview."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""


class GoogleAutocompleteInput(TypedDict, total=False):
    """Input for Google Autocomplete."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    hl: NotRequired[str]
    """Two-letter interface and results language code for the suggestions (e.g. en, es, de). Default: en."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """The partial Google search query."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""


class GoogleImagesInput(TypedDict, total=False):
    """Input for Google Images."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    autocorrect: NotRequired[bool]
    """Toggle Google spelling autocorrect (default true). Set false to search the exact query without correction."""
    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    hl: NotRequired[str]
    """Two-letter interface and results language code (e.g. en, es, de). Default: en."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    limit: NotRequired[int]
    """Maximum number of images to return (1-100, default 20). Requests for 10 results or fewer are billed at a lower rate than larger requests. Range: 1 to 100. Default: 20."""
    location: NotRequired[str]
    """Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """Image search query (e.g. golden gate bridge at sunset)."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
    timeframe: NotRequired[Literal["1h", "1d", "7d", "1y", "all"]]
    """Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction)."""


class GoogleLensInput(TypedDict, total=False):
    """Input for Google Lens."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
    url: Required[str]
    """Public URL of the image to search with."""


class GoogleNewsInput(TypedDict, total=False):
    """Input for Google News."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    hl: NotRequired[str]
    """Two-letter interface and results language code (e.g. en, es, de). Default: en."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    limit: NotRequired[int]
    """Requested article count (1-20, default 20). Google News returns its latest matching articles and may return more or fewer than requested. Price is flat per request. Range: 1 to 20."""
    location: NotRequired[str]
    """Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """News search query; supports operators like '-', 'OR', and 'site:' (e.g. bitcoin site:cnn.com)."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
    timeframe: NotRequired[str]
    """How far back to search, written as a count plus a unit: h hours, d days, w weeks, m months, y years. So 2h is the last two hours, 30d the last thirty days, 6m the last six months. Omit this field, or send 'all', to search without a time limit."""


class GooglePatentsInput(TypedDict, total=False):
    """Input for Google Patents."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """The Google Patents search query."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""


class GoogleScholarInput(TypedDict, total=False):
    """Input for Google Scholar."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """The Google Scholar search query."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""


class GoogleSearchInput(TypedDict, total=False):
    """Input for Google Search."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    autocorrect: NotRequired[bool]
    """Toggle Google spelling autocorrect (default true). Set false to search the exact query without correction."""
    cursor: NotRequired[str]
    """Deprecated: send page instead. A continuation token from an earlier response's nextCursor is still accepted and still continues on the source that issued it; page is ignored when cursor is sent alongside it."""
    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    hl: NotRequired[str]
    """Two-letter interface and results language code (e.g. en, es, de). Default: en."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    limit: NotRequired[int]
    """Maximum number of organic results to return in this response. Google stopped honoring bulk result counts in September 2025, so one page is about 10 results and a limit above 10 is accepted but will not return more than that. To go deeper, send page (about 10 results per page, each billed as a request) or use google.search_100, which returns up to 100 ranked results in a single call for one flat charge and is cheaper past roughly 20 results. Price is flat per request. Range: 1 to 100. Default: 10."""
    location: NotRequired[str]
    """Fine-grained location to localize results to, more specific than the country-level gl. Must exactly match an Active Canonical Name from Google's geo-target list, which uses no space after each comma: 'New York,New York,United States', 'Austin,Texas,United States', 'London,England,United Kingdom'. A value that does not match is rejected rather than quietly searched from somewhere else."""
    page: NotRequired[int]
    """Which page of about 10 organic results to return, starting at 1. Send page 2, 3, ... to walk deeper; each page is billed as one request and any source can serve any page. Replaces cursor. Minimum: 1. Default: 1."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """The Google search query."""
    requireCursor: NotRequired[bool]
    """Deprecated. Every source for this search returns a nextCursor, so this changes nothing about the price or which source serves you; it stays accepted so callers that already send it keep working."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
    timeframe: NotRequired[Literal["1h", "1d", "7d", "1y", "all"]]
    """Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction)."""


class GoogleSearch100Input(TypedDict, total=False):
    """Input for Google Search Top 100."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    autocorrect: NotRequired[bool]
    """Toggle Google spelling autocorrect (default true). Set false to search the exact query without correction."""
    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    hl: NotRequired[str]
    """Two-letter interface and results language code (e.g. en, es, de). Default: en."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """The Google search query."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
    timeframe: NotRequired[Literal["1h", "1d", "7d", "1y", "all"]]
    """Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction)."""


class GoogleVideosInput(TypedDict, total=False):
    """Input for Google Videos."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    autocorrect: NotRequired[bool]
    """Toggle Google spelling autocorrect (default true). Set false to search the exact query without correction."""
    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    hl: NotRequired[str]
    """Two-letter interface and results language code (e.g. en, es, de). Default: en."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    location: NotRequired[str]
    """Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """The video search query."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
    timeframe: NotRequired[Literal["1h", "1d", "7d", "1y", "all"]]
    """Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction)."""


class GoogleAiModeData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    answer: str = Field(
        description="The answer as plain text, as Google generated it for this search. Length and coverage vary between searches on the same prompt. Populated whenever the provider has data for the entity."
    )
    answer_markdown: str = Field(
        alias="answerMarkdown",
        description="The answer in Markdown when Google returns a Markdown rendering, otherwise the same text as answer. Populated whenever the provider has data for the entity.",
    )
    citations: list[GoogleAiModeCitation] = Field(
        description="The sources Google cited for this search, in the order it returned them. Google recomputes the set per search, so counts and membership vary between calls on the same prompt."
    )
    prompt: str = Field(
        description="The prompt answered by the upstream search experience. Populated whenever the provider has data for the entity."
    )


class GoogleAiModeCitation(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str = Field(description="The cited source title.")
    url: str = Field(description="The cited source URL.")


class GoogleAiOverviewData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    answer: str = Field(
        description="The AI Overview answer as plain text, as generated for this scrape. Populated whenever the provider has data for the entity."
    )
    answer_markdown: str = Field(
        alias="answerMarkdown",
        description="The same answer in Markdown, preserving the headings and lists Google rendered. Populated whenever the provider has data for the entity.",
    )
    citations: list[GoogleAiOverviewCitation] = Field(
        description="Every source Google listed for this overview, in Google's own order. This is the full list behind the overview, not only the few sources Google renders inline before the list is expanded, so it is routinely longer than what a reader sees at a glance."
    )
    language: str | None = Field(
        default=None,
        description="Two-letter language code the overview was generated in.",
    )
    prompt: str = Field(
        description="The prompt Google answered. Populated whenever the provider has data for the entity."
    )
    scraped_at: str | None = Field(
        default=None,
        alias="scrapedAt",
        description="When this overview was captured, ISO 8601 UTC. Because Google regenerates the overview per search, this identifies which generation the other fields describe.",
    )


class GoogleAiOverviewCitation(BaseModel):
    model_config = ConfigDict(extra="allow")

    index: int | None = Field(
        default=None,
        description="Google's position for this source within the overview, starting at 1.",
    )
    title: str = Field(
        description="The cited source title as Google presented it, which may carry a trailing date and snippet."
    )
    url: str = Field(description="The cited source URL.")


class GoogleAutocompleteData(BaseModel):
    query: str = Field(description="The partial query that was searched.")
    suggestions: list[GoogleAutocompleteSuggestion] = Field(
        description="Autocomplete suggestion records. Populated whenever the provider has data for the entity."
    )


class GoogleAutocompleteSuggestion(BaseModel):
    model_config = ConfigDict(extra="allow")

    value: str = Field(
        description="Suggested query text. Populated whenever the provider has data for the entity."
    )


class GoogleImagesData(BaseModel):
    items: list[GoogleImagesItem] = Field(
        description="Image result records: image URL, dimensions, title, and the source page it appears on. Populated whenever the provider has data for the entity."
    )


class GoogleImagesItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    height: int | None = Field(default=None, description="Full image height in pixels.")
    position: int | None = Field(
        default=None,
        description="One-based position of this image in Google's result order.",
    )
    source: str | None = Field(
        default=None,
        description="Host domain of the page the image appears on. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    source_url: str | None = Field(
        default=None,
        alias="sourceUrl",
        description="URL of the page the image appears on. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    thumbnail_url: str | None = Field(
        default=None,
        alias="thumbnailUrl",
        description="URL to a thumbnail of the image.",
    )
    title: str = Field(
        description="Image result title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Direct URL to the full-size image. Populated whenever the provider has data for the entity."
    )
    width: int | None = Field(default=None, description="Full image width in pixels.")


class GoogleLensData(BaseModel):
    results: list[GoogleLensResult] = Field(
        description="Visual match result records. Populated whenever the provider has data for the entity."
    )
    url: str = Field(description="The input image URL that was searched.")


class GoogleLensResult(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    image: str | None = Field(default=None, description="Matched image URL.")
    link: str = Field(
        description="URL to the matching web page. Populated whenever the provider has data for the entity."
    )
    source: str | None = Field(default=None, description="Source site name.")
    thumbnail_url: str | None = Field(
        default=None,
        alias="thumbnailUrl",
        description="Thumbnail image URL for the match.",
    )
    title: str = Field(
        description="Title of the matching web page. Populated whenever the provider has data for the entity."
    )


class GoogleNewsData(BaseModel):
    items: list[GoogleNewsItem] = Field(
        description="Article records: headline, source name, article link, and publish time. Populated whenever the provider has data for the entity."
    )


class GoogleNewsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    image: str | None = Field(
        default=None,
        description="Thumbnail image URL for the article. The query string carries the image identity, so it is kept.",
    )
    snippet: str | None = Field(
        default=None, description="Article snippet when available."
    )
    source: str | None = Field(
        default=None,
        description="Publisher name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    title: str = Field(
        description="Article headline. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Article link. Populated whenever the provider has data for the entity."
    )


class GooglePatentsData(BaseModel):
    query: str = Field(description="The query that was searched.")
    results: list[GooglePatentsResult] = Field(description="Patent result records.")


class GooglePatentsResult(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    assignee: str | None = Field(default=None, description="Patent assignee.")
    filed_utc: float | None = Field(
        default=None,
        alias="filedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    granted_utc: float | None = Field(
        default=None,
        alias="grantedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    image: str | None = Field(
        default=None, description="First patent figure thumbnail image URL."
    )
    inventor: str | None = Field(
        default=None, description="Named inventor or inventors."
    )
    language: str | None = Field(
        default=None, description="Two-letter language code of the patent document."
    )
    link: str = Field(
        description="URL to the patent. Populated whenever the provider has data for the entity."
    )
    pdf_url: str | None = Field(
        default=None, alias="pdfUrl", description="URL to an available patent PDF."
    )
    priority_utc: float | None = Field(
        default=None,
        alias="priorityUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    publication_number: str = Field(
        alias="publicationNumber",
        description="Patent publication number (e.g. US11303135B2). Populated whenever the provider has data for the entity.",
    )
    published_utc: float | None = Field(
        default=None,
        alias="publishedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    snippet: str | None = Field(
        default=None, description="Short patent description snippet."
    )
    title: str = Field(
        description="Patent title. Populated whenever the provider has data for the entity."
    )


class GoogleScholarData(BaseModel):
    query: str = Field(description="The query that was searched.")
    results: list[GoogleScholarResult] = Field(
        description="Academic paper result records."
    )


class GoogleScholarResult(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    cited_by: int | None = Field(
        default=None,
        alias="citedBy",
        description="Number of citations reported by Google Scholar.",
    )
    id: str | None = Field(default=None, description="Result identifier.")
    link: str = Field(
        description="URL to the paper. Populated whenever the provider has data for the entity."
    )
    pdf_url: str | None = Field(
        default=None, alias="pdfUrl", description="URL to an available PDF."
    )
    publication_info: str | None = Field(
        default=None,
        alias="publicationInfo",
        description="Authors, venue, and publication year.",
    )
    snippet: str | None = Field(
        default=None, description="Short paper description snippet."
    )
    title: str = Field(
        description="Paper title. Populated whenever the provider has data for the entity."
    )
    year: int | None = Field(default=None, description="Publication year.")


class GoogleSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        default=None,
        alias="nextCursor",
        description="Opaque cursor for the next page of results, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    query: str
    results: list[GoogleSearchResult] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class GoogleSearchResult(BaseModel):
    model_config = ConfigDict(extra="allow")

    link: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    position: int
    snippet: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class GoogleSearch100Data(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    ai_overview: str | None = Field(
        default=None,
        alias="aiOverview",
        description="Google's AI Overview text for this query, when Google showed one. Absent when it did not.",
    )
    query: str = Field(description="The search query these results answer.")
    results: list[GoogleSearch100Result] = Field(
        description="Organic results in Google's own order, position 1 first. Populated whenever the provider has data for the entity."
    )


class GoogleSearch100Result(BaseModel):
    model_config = ConfigDict(extra="allow")

    link: str = Field(
        description="The destination URL. Populated whenever the provider has data for the entity."
    )
    position: int = Field(
        description="Absolute rank across the whole result set, counting from 1 - not restarted per page. Populated whenever the provider has data for the entity."
    )
    snippet: str = Field(
        description="Google's summary text for the result. Populated whenever the provider has data for the entity."
    )
    title: str = Field(
        description="The result's headline as Google renders it. Populated whenever the provider has data for the entity."
    )


class GoogleVideosData(BaseModel):
    query: str = Field(description="The query that was searched.")
    results: list[GoogleVideosResult] = Field(
        description="Video result records. Populated whenever the provider has data for the entity."
    )


class GoogleVideosResult(BaseModel):
    model_config = ConfigDict(extra="allow")

    image: str | None = Field(
        default=None, description="Thumbnail image URL for the video."
    )
    link: str = Field(
        description="URL to the video. Populated whenever the provider has data for the entity."
    )
    position: int | None = Field(
        default=None, description="1-based rank in the result list."
    )
    snippet: str | None = Field(default=None, description="Short description snippet.")
    source: str | None = Field(
        default=None, description="Host platform (e.g. YouTube, Vimeo)."
    )
    title: str = Field(
        description="Video title. Populated whenever the provider has data for the entity."
    )


class GoogleNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def ai_mode(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAiModeInput],
    ) -> RunResult[GoogleAiModeData]:
        """Google AI Mode

        Ask Google AI Mode a prompt and receive the cited answer it generates. AI
        Mode composes the answer at search time, so repeat calls on one prompt can
        differ in wording and in which sources are cited.

        Price: $0.00006 per request plus $0.0033 per result (maximum $0.00336).

        Example:
            res = client.google.ai_mode(prompt="What is AnyAPI at getanyapi.com, and what does it offer?")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.ai_mode", dict(input), options
        )
        return RunResult[GoogleAiModeData].model_validate(raw)

    def ai_overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAiOverviewInput],
    ) -> RunResult[GoogleAiOverviewData]:
        """Google AI Overview

        Ask Google Search a prompt and receive the AI Overview it generated for that
        scrape, with every source Google listed. Google regenerates the overview per
        search, so the same prompt can return different wording and a different
        source list.

        Price: $0.0018 per request.

        Example:
            res = client.google.ai_overview(prompt="How does photosynthesis work?")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.ai_overview", dict(input), options
        )
        return RunResult[GoogleAiOverviewData].model_validate(raw)

    def autocomplete(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAutocompleteInput],
    ) -> RunResult[GoogleAutocompleteData]:
        """Google Autocomplete

        Get Google search autocomplete suggestions for a partial query (keyword
        ideas).

        Price: $0.00099 per request.

        Example:
            res = client.google.autocomplete(query="best coff")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.autocomplete", dict(input), options
        )
        return RunResult[GoogleAutocompleteData].model_validate(raw)

    def images(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleImagesInput],
    ) -> RunResult[GoogleImagesData]:
        """Google Images

        Run a Google Images search and get structured results: image URLs,
        dimensions, titles, and source pages.

        Price: $0.00099 per request plus $0.00009 per result (maximum $0.00198).

        Example:
            res = client.google.images(gl="us", hl="en", limit=5, query="golden retriever")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.images", dict(input), options
        )
        return RunResult[GoogleImagesData].model_validate(raw)

    def lens(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleLensInput]
    ) -> RunResult[GoogleLensData]:
        """Google Lens

        Reverse image search: find web pages and visual matches for an image URL.

        Price: $0.00297 per request.

        Example:
            res = client.google.lens(url="https://i.imgur.com/HBrB8p0.png")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.lens", dict(input), options
        )
        return RunResult[GoogleLensData].model_validate(raw)

    def news(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleNewsInput]
    ) -> RunResult[GoogleNewsData]:
        """Google News

        Search Google News by keyword and get fresh articles (headlines, sources,
        links, and publish times) as clean JSON.

        Price: $0.00099 per request.

        Example:
            res = client.google.news(gl="us", hl="en", query="openai")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.news", dict(input), options
        )
        return RunResult[GoogleNewsData].model_validate(raw)

    def patents(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GooglePatentsInput],
    ) -> RunResult[GooglePatentsData]:
        """Google Patents

        Search Google Patents with title, patent number, inventor, assignee, key
        dates, and PDF link.

        Price: $0.00099 per request.

        Example:
            res = client.google.patents(query="wireless charging")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.patents", dict(input), options
        )
        return RunResult[GooglePatentsData].model_validate(raw)

    def scholar(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleScholarInput],
    ) -> RunResult[GoogleScholarData]:
        """Google Scholar

        Search Google Scholar for academic papers with title, authors, citation
        count, and PDF link.

        Price: $0.00099 per request.

        Example:
            res = client.google.scholar(query="attention is all you need")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.scholar", dict(input), options
        )
        return RunResult[GoogleScholarData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> RunResult[GoogleSearchData]:
        """Google Search

        Run a Google web search and get the organic results (title, link, snippet,
        position) as clean JSON. Returns about 10 results per call - Google stopped
        honoring bulk result counts in September 2025, so a limit above 10 is
        accepted but returns no more than a page. Send page 2, 3, ... to walk
        further, or use google.search_100 for up to 100 ranked results in one call,
        which is cheaper past roughly 20 results.

        Price: $0.0005 per request.

        Example:
            res = client.google.search(gl="us", hl="en", limit=10, query="best coffee maker")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.search", dict(input), options
        )
        return RunResult[GoogleSearchData].model_validate(raw)

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> Paginator[GoogleSearchResult, GoogleSearchData]:
        """Iterate Google Search results, following pagination cursors.

        Yields validated `GoogleSearchResult` items from the `results` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "google.search",
            dict(input),
            "results",
            item_model=GoogleSearchResult,
            data_model=GoogleSearchData,
            bare=False,
            options=options,
        )

    def search_100(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearch100Input],
    ) -> RunResult[GoogleSearch100Data]:
        """Google Search Top 100

        Run a Google web search and get up to 100 ranked organic results in one
        call, with true absolute positions rather than per-page numbering. One flat
        charge whatever the depth, which makes it cheaper than paging google.search
        past roughly 20 results. It reads ten pages of Google to build the list, so
        a call takes around three to four minutes - use google.search when you want
        the first page back in a second.

        Price: $0.0018 per request.

        Example:
            res = client.google.search_100(gl="us", hl="en", query="best crm software")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.search_100", dict(input), options
        )
        return RunResult[GoogleSearch100Data].model_validate(raw)

    def videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleVideosInput],
    ) -> RunResult[GoogleVideosData]:
        """Google Videos

        Search Google for video results (YouTube and others) with title, link,
        thumbnail, and source.

        Price: $0.00099 per request.

        Example:
            res = client.google.videos(gl="us", hl="en", query="lofi hip hop")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.videos", dict(input), options
        )
        return RunResult[GoogleVideosData].model_validate(raw)


class AsyncGoogleNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def ai_mode(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAiModeInput],
    ) -> RunResult[GoogleAiModeData]:
        """Google AI Mode

        Ask Google AI Mode a prompt and receive the cited answer it generates. AI
        Mode composes the answer at search time, so repeat calls on one prompt can
        differ in wording and in which sources are cited.

        Price: $0.00006 per request plus $0.0033 per result (maximum $0.00336).

        Example:
            res = client.google.ai_mode(prompt="What is AnyAPI at getanyapi.com, and what does it offer?")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.ai_mode", dict(input), options
        )
        return RunResult[GoogleAiModeData].model_validate(raw)

    async def ai_overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAiOverviewInput],
    ) -> RunResult[GoogleAiOverviewData]:
        """Google AI Overview

        Ask Google Search a prompt and receive the AI Overview it generated for that
        scrape, with every source Google listed. Google regenerates the overview per
        search, so the same prompt can return different wording and a different
        source list.

        Price: $0.0018 per request.

        Example:
            res = client.google.ai_overview(prompt="How does photosynthesis work?")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.ai_overview", dict(input), options
        )
        return RunResult[GoogleAiOverviewData].model_validate(raw)

    async def autocomplete(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAutocompleteInput],
    ) -> RunResult[GoogleAutocompleteData]:
        """Google Autocomplete

        Get Google search autocomplete suggestions for a partial query (keyword
        ideas).

        Price: $0.00099 per request.

        Example:
            res = client.google.autocomplete(query="best coff")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.autocomplete", dict(input), options
        )
        return RunResult[GoogleAutocompleteData].model_validate(raw)

    async def images(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleImagesInput],
    ) -> RunResult[GoogleImagesData]:
        """Google Images

        Run a Google Images search and get structured results: image URLs,
        dimensions, titles, and source pages.

        Price: $0.00099 per request plus $0.00009 per result (maximum $0.00198).

        Example:
            res = client.google.images(gl="us", hl="en", limit=5, query="golden retriever")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.images", dict(input), options
        )
        return RunResult[GoogleImagesData].model_validate(raw)

    async def lens(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleLensInput]
    ) -> RunResult[GoogleLensData]:
        """Google Lens

        Reverse image search: find web pages and visual matches for an image URL.

        Price: $0.00297 per request.

        Example:
            res = client.google.lens(url="https://i.imgur.com/HBrB8p0.png")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.lens", dict(input), options
        )
        return RunResult[GoogleLensData].model_validate(raw)

    async def news(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleNewsInput]
    ) -> RunResult[GoogleNewsData]:
        """Google News

        Search Google News by keyword and get fresh articles (headlines, sources,
        links, and publish times) as clean JSON.

        Price: $0.00099 per request.

        Example:
            res = client.google.news(gl="us", hl="en", query="openai")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.news", dict(input), options
        )
        return RunResult[GoogleNewsData].model_validate(raw)

    async def patents(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GooglePatentsInput],
    ) -> RunResult[GooglePatentsData]:
        """Google Patents

        Search Google Patents with title, patent number, inventor, assignee, key
        dates, and PDF link.

        Price: $0.00099 per request.

        Example:
            res = client.google.patents(query="wireless charging")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.patents", dict(input), options
        )
        return RunResult[GooglePatentsData].model_validate(raw)

    async def scholar(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleScholarInput],
    ) -> RunResult[GoogleScholarData]:
        """Google Scholar

        Search Google Scholar for academic papers with title, authors, citation
        count, and PDF link.

        Price: $0.00099 per request.

        Example:
            res = client.google.scholar(query="attention is all you need")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.scholar", dict(input), options
        )
        return RunResult[GoogleScholarData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> RunResult[GoogleSearchData]:
        """Google Search

        Run a Google web search and get the organic results (title, link, snippet,
        position) as clean JSON. Returns about 10 results per call - Google stopped
        honoring bulk result counts in September 2025, so a limit above 10 is
        accepted but returns no more than a page. Send page 2, 3, ... to walk
        further, or use google.search_100 for up to 100 ranked results in one call,
        which is cheaper past roughly 20 results.

        Price: $0.0005 per request.

        Example:
            res = client.google.search(gl="us", hl="en", limit=10, query="best coffee maker")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.search", dict(input), options
        )
        return RunResult[GoogleSearchData].model_validate(raw)

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> AsyncPaginator[GoogleSearchResult, GoogleSearchData]:
        """Iterate Google Search results, following pagination cursors.

        Yields validated `GoogleSearchResult` items from the `results` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "google.search",
            dict(input),
            "results",
            item_model=GoogleSearchResult,
            data_model=GoogleSearchData,
            bare=False,
            options=options,
        )

    async def search_100(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearch100Input],
    ) -> RunResult[GoogleSearch100Data]:
        """Google Search Top 100

        Run a Google web search and get up to 100 ranked organic results in one
        call, with true absolute positions rather than per-page numbering. One flat
        charge whatever the depth, which makes it cheaper than paging google.search
        past roughly 20 results. It reads ten pages of Google to build the list, so
        a call takes around three to four minutes - use google.search when you want
        the first page back in a second.

        Price: $0.0018 per request.

        Example:
            res = client.google.search_100(gl="us", hl="en", query="best crm software")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.search_100", dict(input), options
        )
        return RunResult[GoogleSearch100Data].model_validate(raw)

    async def videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleVideosInput],
    ) -> RunResult[GoogleVideosData]:
        """Google Videos

        Search Google for video results (YouTube and others) with title, link,
        thumbnail, and source.

        Price: $0.00099 per request.

        Example:
            res = client.google.videos(gl="us", hl="en", query="lofi hip hop")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.videos", dict(input), options
        )
        return RunResult[GoogleVideosData].model_validate(raw)
